import{j as r,r as x}from"./iframe-jfiAx13E.js";import{c as p,u as c,F as a,t as F}from"./Form-CjWceNCH.js";import{R as l,S as h}from"./ResetButton-3YYKNAhz.js";import{B as d}from"./Button-0JA4DlHg.js";import{S as j,s as u}from"./Section-Cq5txI6z.js";import{A as b}from"./ActionGroup-Dcl4jstL.js";import{v as t,F as E}from"./Modal-CX66kXkE.js";import"./index-nuYtCEEu.js";import"./dynamic-spzJk2X2.js";import"./flowComponent-CGAmEMtP.js";import"./index-DveU93s7.js";import"./clsx-B-dksMZM.js";import"./index-nYZuwJQK.js";import"./useLocalizedStringFormatter-11Mex28w.js";import"./context-Dt1an7Oo.js";import"./browser-Cf72YD6u.js";import"./utils-CFoUdj0t.js";import"./IconWarning-CLlhNyNw.js";import"./Text-DMCt93av.js";import"./EmulatedBoldText-FBIs6RkZ.js";import"./LoadingSpinner-CJ4P62eK.js";import"./Button-DYW2V96T.js";import"./ProgressBar-DTac6yq1.js";import"./Hidden-BolQ_iVE.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DSWloUds.js";import"./useFocusable-C36BBZPx.js";import"./context-DFW5cDY1.js";import"./RSPContexts-DlUgI_bO.js";import"./Collection-CucMCaxz.js";import"./CollectionBuilder-BCsWiDMP.js";import"./SelectionIndicator-C0hj0suB.js";import"./Separator-DMHVCuKL.js";import"./useStatic-CVt4f_3L.js";import"./FileCardList-CAO-eKhF.js";import"./Avatar-BPXSWiS2.js";import"./AlertIcon-jVfRkC0n.js";import"./Image-47p4BbHq.js";import"./Link-DdfarbSL.js";import"./ControlledNotification-BWwueiDS.js";import"./Flex-JpE5a0we.js";import"./Accordion-BYK3oF2m.js";import"./Alert-DCnUsegh.js";import"./AlertBadge-D_y3r1rE.js";import"./Align-mqpDKLXq.js";import"./AvatarStack-gXbUfOK9.js";import"./BigNumber-CwI26k0c.js";import"./Breadcrumb-CGMeHl1X.js";import"./Heading-CWWH-j0T.js";import"./Legend-BZvuS00K.js";import"./Color-d-NFCGEW.js";import"./TableFooterRow-DFjgJNI2.js";import"./SkeletonText-CfOW8xE6.js";import"./Content-Bomgcrt_.js";import"./Label-D_WQO2Cw.js";import"./CounterBadge-D5P2daU3.js";import"./DonutChart-_pq3fqGA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8tDB-OR.js";import"./Header-DTInGxSd.js";import"./Initials-CiDdSpYl.js";import"./InlineCode-DlpJG5Xb.js";import"./LayoutCard-Cw6bppbD.js";import"./Separator-ChJOjxdw.js";import"./MessageSeparator-uN66Afyw.js";import"./NavigationGroup-DlhGJFiH.js";import"./Notification-CrpH1NXe.js";import"./NotificationProvider-BXIWqn_y.js";import"./ProgressBar-zmyacfUR.js";import"./Rating-BFtwlB2F.js";import"./Skeleton-DFqhkJii.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),B(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},i={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
