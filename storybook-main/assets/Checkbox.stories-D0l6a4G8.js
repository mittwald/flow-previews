import{j as r,r as x}from"./iframe-Dswl8YqW.js";import{c as p,u as c,F as a,t as F}from"./Form-DWj74Z7V.js";import{R as l,S as h}from"./ResetButton-BalI_NXO.js";import{B as d}from"./Button-BlDvIS3Y.js";import{S as j,s as u}from"./Section-B6yNflVq.js";import{A as b}from"./ActionGroup-DkHaLZ1F.js";import{v as t,F as E}from"./Modal-CHITtey4.js";import"./index-nuYtCEEu.js";import"./dynamic-DeI_eRCJ.js";import"./flowComponent-DO1FM96o.js";import"./index-BTqTpX_p.js";import"./clsx-B-dksMZM.js";import"./index-DoB2isID.js";import"./useLocalizedStringFormatter-5OU1qxVX.js";import"./context-DC5A8m43.js";import"./browser-BqLtz9Zq.js";import"./utils-7BbO5OC0.js";import"./IconWarning-Dt5PaZc0.js";import"./Text-CuuEScv1.js";import"./EmulatedBoldText-BY5a05VQ.js";import"./LoadingSpinner-B_hOay2Z.js";import"./Button-CdXhm7oQ.js";import"./ProgressBar-DCPiQQ-S.js";import"./Hidden-BdIsYl6c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D1ZNAk-m.js";import"./useFocusable-0yY0J0Je.js";import"./context-BYCR6GGl.js";import"./RSPContexts-CB74f7ZL.js";import"./Collection-B4F75Snj.js";import"./CollectionBuilder-DGx6CCpB.js";import"./SelectionIndicator-Dtzr_iAT.js";import"./Separator-Cr7pfpci.js";import"./useStatic-DgEZfjHg.js";import"./FileCardList-C3qXU2FS.js";import"./Avatar-BvulIpzL.js";import"./AlertIcon-BGEjgne8.js";import"./Image-CfXDNzs_.js";import"./Link-2_MM-8En.js";import"./ControlledNotification-Cdu3NdkW.js";import"./Flex-gFiBBQt8.js";import"./Accordion-CBu_vh4u.js";import"./Alert-CNX0ngss.js";import"./AlertBadge-B2_vNTeY.js";import"./Align-BEZzEcxr.js";import"./AvatarStack-3d66Tqwb.js";import"./BigNumber-BpLWNUn0.js";import"./Breadcrumb-CnsXUeFp.js";import"./Heading-iCy8jlSp.js";import"./Legend-B16hb8ja.js";import"./Color-DDNTz8fh.js";import"./TableFooterRow-yZ5uWtqT.js";import"./SkeletonText-BgIZOvmp.js";import"./Content-Bv_VrsCP.js";import"./Label-CMIuj4QW.js";import"./CounterBadge-DDPT3yFh.js";import"./DonutChart-CtVmhw8J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_Xe6Xjh.js";import"./Header-BsG4AfeO.js";import"./Initials-DNzmwkQ0.js";import"./InlineCode-CMg57_NI.js";import"./LayoutCard-CAbUZ4z8.js";import"./Separator-sjczDa9g.js";import"./MessageSeparator-syCyyNp_.js";import"./NavigationGroup-Bhn5LtSm.js";import"./Notification-D9qeLTJG.js";import"./NotificationProvider-DdTUSSU-.js";import"./ProgressBar-D1AqnunX.js";import"./Rating-CrsgcNUp.js";import"./Skeleton-BJgfwKrL.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),B(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},i={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
