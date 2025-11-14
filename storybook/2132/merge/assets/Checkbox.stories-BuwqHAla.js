import{j as r,r as x}from"./iframe-DNdCOOr1.js";import{c as p,u as c,F as a,t as F}from"./Form-DVPsBUeA.js";import{R as l,S as h}from"./ResetButton-B20l9Py_.js";import{B as d}from"./Button-Bi5-Bex0.js";import{S as j,s as u}from"./Section-BzQXps3w.js";import{A as b}from"./ActionGroup-BhPNcsGy.js";import{t,g as E}from"./TimeField-DqayqNa4.js";import"./index-nuYtCEEu.js";import"./dynamic-DEywgUGw.js";import"./PropsContextProvider-BQ7eQhTD.js";import"./mergeRefs-BH624zqo.js";import"./index-C14X84sQ.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-L5dTHvQZ.js";import"./context-BCLfHoxJ.js";import"./browser-BSEwgGQy.js";import"./utils-B65MerL9.js";import"./IconWarning-lDDrCB8Z.js";import"./Text-BN_zs0IC.js";import"./EmulatedBoldText-BjpVZV9x.js";import"./LoadingSpinner-nsia9vBo.js";import"./Button-CTVqlwB9.js";import"./ProgressBar-BQC3e8cN.js";import"./Hidden-D3qCYkY1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D3q76LhO.js";import"./useFocusable-BkrL2nIQ.js";import"./context-EmNd6Ym2.js";import"./RSPContexts-CgZ3T_zH.js";import"./Collection-BkL2_ZU0.js";import"./CollectionBuilder-BDT3C6pE.js";import"./SelectionIndicator-CQqAu7NQ.js";import"./Separator-D7EKlcCC.js";import"./useStatic-Dgx0IMN1.js";import"./getActionGroupSlot-DNgGzsK5.js";import"./Accordion-GqFGURFX.js";import"./Alert-CaxDnpaa.js";import"./AlertIcon-CYdwEvIq.js";import"./AlertBadge-CdMzeFyf.js";import"./Align-DpxI1oJO.js";import"./Popover-DIiESuql.js";import"./OverlayTrigger-BJUnFqxk.js";import"./TableFooterRow-B5x5mMbe.js";import"./SkeletonText-CqfjDCms.js";import"./Avatar-CgUdo1aQ.js";import"./AvatarStack-DWPJgHGM.js";import"./Badge-BgTTIbTx.js";import"./BigNumber-D594wqq9.js";import"./Breadcrumb-y5cZeR2r.js";import"./Link-BJ2onDEJ.js";import"./Heading-BPbMgDfP.js";import"./Legend-CaSPY0_W.js";import"./FileCardList-BejHLRjj.js";import"./Image-DK86CSv-.js";import"./Color-BOVYog2E.js";import"./Content-C8VnHirq.js";import"./Label-Bbx-tQIC.js";import"./ContextualHelpTrigger-D8R9IQKT.js";import"./CounterBadge-Dd6bIx0I.js";import"./DonutChart-B0C_0szQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-f_Y8GvN_.js";import"./Header-DWZ-pwBZ.js";import"./Initials-D02DEgcF.js";import"./InlineCode-KPAoIiPI.js";import"./PopoverTrigger-KapNJ87s.js";import"./Separator-No_3rbsQ.js";import"./Message-D_3XrhXZ.js";import"./MessageSeparator-xZGmf5bD.js";import"./NavigationGroup-D7A_lQCG.js";import"./Notification-B1Orh41A.js";import"./NotificationProvider-DU3F8vQR.js";import"./ProgressBar-DLcywDx4.js";import"./Rating-B9dQKKgs.js";import"./Skeleton-B6xO-4q0.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Mr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
