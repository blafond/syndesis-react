// tslint:disable react-unused-props-and-state
// remove the above line after this goes GA https://github.com/Microsoft/tslint-microsoft-contrib/pull/824
import classnames from 'classnames';
import * as H from 'history';
import * as React from 'react';
import { ButtonLink, Loader } from '../Layout';

/**
 * @param header - a PatternFly Wizard Steps component.
 * @param sidebar - the sidebar container takes the size of its content. If no
 * sidebar is defined, a layout with just the header, the footer and the body
 * will be shown.
 * @param content - the main content of the wizard. In case of overflow, only
 * the body will scroll.
 * @param onCancel - if passed, the Cancel button will be render as a `button`
 * and this callback will be used as its `onClick` handler.
 * @param onBack - if passed, the Back button will be render as a `button`
 * and this callback will be used as its `onClick` handler.
 * @param onNext - if passed, the Next button will be render as a `button`
 * and this callback will be used as its `onClick` handler.
 * @param cancelHref - if passed, the Cancel button will be render as a `Link`
 * using this as its `to` parameter.
 * @param backHref - if passed, the Back button will be render as a `Link`
 * using this as its `to` parameter.
 * @param nextHref - if passed, the Next button will be render as a `Link`
 * using this as its `to` parameter.
 * @param isNextLoading - if set to true, a `Loading` component will be shown
 * inside the Next button before its label. The button will also be disabled.
 * @param isNextDisabled - if set to true, the Next button will be disabled.
 * @param isLastStep - if set to true, it changes the Next button label to
 * 'Done'.
 * @param extraButtons - buttons to add between the cancel and the back/next
 */
export interface IConnectionCreatorProps {
  header: React.ReactNode;
  content: React.ReactNode;
  onCancel?: (e: React.MouseEvent<any>) => void;
  onBack?: (e: React.MouseEvent<any>) => void;
  onNext?: (e: React.MouseEvent<any>) => void;
  cancelHref?: H.LocationDescriptor;
  backHref?: H.LocationDescriptor;
  nextHref?: H.LocationDescriptor;
  isNextDisabled?: boolean;
  isNextLoading?: boolean;
  isLastStep?: boolean;
  extraButtons?: React.ReactNode;
}

/**
 * Provides the layout for the integration editor. It uses the PatternFly Wizard
 * component under the hood.
 * The footer is pre-defined and follows the PF Wizard pattern, with
 * Cancel/Previous/Next buttons.
 *
 * @todo in the CSS we use hardcoded values for the heights of various
 * elements of the page to be able to size the element to take all the available
 * height and show the right scrollbars.
 * We should really find a smarter way to handle this.
 */
export const ConnectionCreatorLayout: React.FunctionComponent<
  IConnectionCreatorProps
> = ({
  header,
  content,
  onCancel,
  onBack,
  onNext,
  cancelHref,
  backHref,
  nextHref,
  isNextLoading,
  isNextDisabled,
  isLastStep = false,
  extraButtons,
}: IConnectionCreatorProps) => {
  return (
    <div
      className={classnames(
        'wizard-pf-body integration-editor-layout syn-scrollable',
        {
          'has-footer': true,
        }
      )}
    >
      {header}
      <div className="wizard-pf-row integration-editor-layout__body syn-scrollable--body">
        <div
          className={
            'wizard-pf-main cards-pf integration-editor-layout__contentWrapper'
          }
        >
          <div className="integration-editor-layout__content">{content}</div>
        </div>
      </div>
      <div className="wizard-pf-footer integration-editor-layout__footer">
        <ButtonLink
          onClick={onBack}
          href={backHref}
          className={'wizard-pf-back'}
        >
          <i className="fa fa-angle-left" /> Back
        </ButtonLink>
        {extraButtons && (
          <div className={'wizard-pf-extrabuttons'}>{extraButtons}</div>
        )}
        <ButtonLink
          onClick={onNext}
          href={nextHref}
          as={'primary'}
          className={'wizard-pf-next'}
          disabled={isNextLoading || isNextDisabled}
        >
          {isNextLoading ? <Loader size={'xs'} inline={true} /> : null}
          {isLastStep ? (
            'Done'
          ) : (
            <>
              Next <i className="fa fa-angle-right" />
            </>
          )}
        </ButtonLink>
        <ButtonLink
          onClick={onCancel}
          href={cancelHref}
          className={'wizard-pf-cancel'}
        >
          Cancel
        </ButtonLink>
      </div>
    </div>
  );
};
