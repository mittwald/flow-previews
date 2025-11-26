import{j as r,r as F}from"./iframe-D1IXLGfs.js";import{b as n,u as p,F as a,t as S}from"./Form-Bff3UVAM.js";import{R as u,S as l}from"./ResetButton-DuVxIEvp.js";import{B as d}from"./Button-C4C6Tlp0.js";import{S as x,s as c}from"./Section-C53WOw1M.js";import{A as E}from"./ActionGroup-Dy6atzM_.js";import{S as s,g as j}from"./TimeField-AGTx6k1i.js";import"./index-nuYtCEEu.js";import"./dynamic-pDnrtSWy.js";import"./PropsContextProvider-C_Awy-Mb.js";import"./mergeRefs-beV1eqaE.js";import"./index-CvlGE98O.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-B1FtVS3l.js";import"./context-Co7rtKcb.js";import"./browser-tVHcyQIt.js";import"./utils-B-QWEDo7.js";import"./IconWarning-BxNDhWjd.js";import"./Text-D1LKMi-w.js";import"./EmulatedBoldText-DH1aO4MF.js";import"./LoadingSpinner-7FjPacVo.js";import"./Button-CMJuT-cA.js";import"./ProgressBar-yyUOmkTp.js";import"./Hidden-CcqmDqte.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D8NPA1ph.js";import"./useFocusable-C6Y2IEKU.js";import"./context-5e9UnPLe.js";import"./RSPContexts-BgSWsIZW.js";import"./Collection-DvnA0NAr.js";import"./CollectionBuilder-DezSz7RI.js";import"./SelectionIndicator-CBNg2on9.js";import"./Separator-ifeGnJlj.js";import"./useStatic-CpvtqM-K.js";import"./Accordion-BzVkjqgY.js";import"./Alert-QHsz_O3h.js";import"./AlertIcon-D96GlUxX.js";import"./AlertBadge-BYlu6Hm_.js";import"./Align-B09u4AJz.js";import"./Popover-BXbsVRKM.js";import"./OverlayTrigger-B4YqZS9k.js";import"./TableFooterRow-JV1dlzn6.js";import"./SkeletonText-BvUdv64z.js";import"./Avatar-Dgoo8XLu.js";import"./AvatarStack-DtbcXK87.js";import"./Badge-C-697TDl.js";import"./BigNumber-D0ECKC0O.js";import"./Breadcrumb-BUr6ABI5.js";import"./Link-CxLhPbdv.js";import"./Heading-oQ8JRrCO.js";import"./Legend-CqX9YVYz.js";import"./FileCardList-B1MHdddU.js";import"./Image-BtTPpMHP.js";import"./Color-BS8KIqfb.js";import"./Content-BzpcLFjt.js";import"./Label-DqDuDjZM.js";import"./ContextualHelpTrigger-DAOvEHNM.js";import"./CounterBadge-BX6TKafN.js";import"./DonutChart-JW7SWDsk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DShuYc2u.js";import"./Header-Dbn0HhfV.js";import"./Initials-D9ELne8C.js";import"./InlineCode-CUmJ0bpc.js";import"./PopoverTrigger-DVp_5BpC.js";import"./Separator-QPbWx2p8.js";import"./Message-BpdzFhxT.js";import"./MessageSeparator-BOJp8Opk.js";import"./NavigationGroup-CpG2utD2.js";import"./Notification-civqnTG1.js";import"./NotificationProvider-CNqrmsHu.js";import"./ProgressBar-JXuTyxt5.js";import"./Skeleton-Fe8-xAPK.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Lr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Mr as __namedExportsOrder,Lr as default};
