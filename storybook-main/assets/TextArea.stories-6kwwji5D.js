import{j as r,r as F}from"./iframe-jfiAx13E.js";import{c as p,u as d,F as l,t as j}from"./Form-CjWceNCH.js";import{L as o}from"./Label-D_WQO2Cw.js";import{R as h,S as x}from"./ResetButton-3YYKNAhz.js";import{B as u}from"./Button-0JA4DlHg.js";import{S as g,s as c}from"./Section-Cq5txI6z.js";import{A as b}from"./ActionGroup-Dcl4jstL.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,F as S}from"./Modal-CX66kXkE.js";import"./index-nuYtCEEu.js";import"./dynamic-spzJk2X2.js";import"./flowComponent-CGAmEMtP.js";import"./index-DveU93s7.js";import"./clsx-B-dksMZM.js";import"./index-nYZuwJQK.js";import"./useLocalizedStringFormatter-11Mex28w.js";import"./context-Dt1an7Oo.js";import"./browser-Cf72YD6u.js";import"./utils-CFoUdj0t.js";import"./ProgressBar-DTac6yq1.js";import"./Hidden-BolQ_iVE.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CLlhNyNw.js";import"./Text-DMCt93av.js";import"./EmulatedBoldText-FBIs6RkZ.js";import"./LoadingSpinner-CJ4P62eK.js";import"./Button-DYW2V96T.js";import"./useFocusRing-DSWloUds.js";import"./useFocusable-C36BBZPx.js";import"./context-DFW5cDY1.js";import"./RSPContexts-DlUgI_bO.js";import"./Collection-CucMCaxz.js";import"./CollectionBuilder-BCsWiDMP.js";import"./SelectionIndicator-C0hj0suB.js";import"./Separator-DMHVCuKL.js";import"./useStatic-CVt4f_3L.js";import"./FileCardList-CAO-eKhF.js";import"./Avatar-BPXSWiS2.js";import"./AlertIcon-jVfRkC0n.js";import"./Image-47p4BbHq.js";import"./Link-DdfarbSL.js";import"./ControlledNotification-BWwueiDS.js";import"./Flex-JpE5a0we.js";import"./Accordion-BYK3oF2m.js";import"./Alert-DCnUsegh.js";import"./AlertBadge-D_y3r1rE.js";import"./Align-mqpDKLXq.js";import"./AvatarStack-gXbUfOK9.js";import"./BigNumber-CwI26k0c.js";import"./Breadcrumb-CGMeHl1X.js";import"./Heading-CWWH-j0T.js";import"./Legend-BZvuS00K.js";import"./Color-d-NFCGEW.js";import"./TableFooterRow-DFjgJNI2.js";import"./SkeletonText-CfOW8xE6.js";import"./Content-Bomgcrt_.js";import"./CounterBadge-D5P2daU3.js";import"./DonutChart-_pq3fqGA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8tDB-OR.js";import"./Header-DTInGxSd.js";import"./Initials-CiDdSpYl.js";import"./InlineCode-DlpJG5Xb.js";import"./LayoutCard-Cw6bppbD.js";import"./Separator-ChJOjxdw.js";import"./MessageSeparator-uN66Afyw.js";import"./NavigationGroup-DlhGJFiH.js";import"./Notification-CrpH1NXe.js";import"./NotificationProvider-BXIWqn_y.js";import"./ProgressBar-zmyacfUR.js";import"./Rating-BFtwlB2F.js";import"./Skeleton-DFqhkJii.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await c(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Kr as __namedExportsOrder,Hr as default};
