import{j as r,r as F}from"./iframe-RkNYvT67.js";import{c as p,u as d,F as l,t as j}from"./Form-pYBt_OI-.js";import{L as o}from"./Label-CSQY-O06.js";import{R as h,S as x}from"./ResetButton-DVKahqzM.js";import{B as u}from"./Button-Cq2sGnot.js";import{S as g,s as c}from"./Section-C9URTgx-.js";import{A as b}from"./ActionGroup-U66WTNaW.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,F as S}from"./Modal-xVut-wtw.js";import"./index-nuYtCEEu.js";import"./dynamic-D525euPD.js";import"./flowComponent-t1J_uYA_.js";import"./index-BXAy4ZoD.js";import"./clsx-B-dksMZM.js";import"./index-CYuD20gW.js";import"./useLocalizedStringFormatter-CZYF-KE5.js";import"./context-DpnYhhMC.js";import"./browser-O08qKn7T.js";import"./utils-Cw0V24oX.js";import"./ProgressBar-DatwHdcd.js";import"./Hidden-DglwBjTS.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Bv_c0irh.js";import"./Text-CGI13fZ7.js";import"./EmulatedBoldText-wSSRmDQ8.js";import"./LoadingSpinner-C8ge1gn9.js";import"./Button-BaIk0AjS.js";import"./useFocusRing-zSkRpitG.js";import"./useFocusable-Cc38Xz3k.js";import"./context-QFyIn5AW.js";import"./RSPContexts-iWdoYzW5.js";import"./Collection-Dn2VpDMj.js";import"./CollectionBuilder-G2QPbUNk.js";import"./SelectionIndicator-ygw8vgtw.js";import"./Separator-AC7DyvUW.js";import"./useStatic-DSkca5nN.js";import"./FileCardList-BOij6tHP.js";import"./Avatar-D-Vh6qCe.js";import"./AlertIcon-Dfi2fKkE.js";import"./Image-Du0dM-WM.js";import"./Link-CcuThIFH.js";import"./ControlledNotification-Bv9UL5dV.js";import"./Flex-B3wiFoJ1.js";import"./Accordion-DmcKhtrA.js";import"./Alert-D3bKy03a.js";import"./AlertBadge-Bdr69yR6.js";import"./Align-fxln_Dgz.js";import"./AvatarStack-C0E2D8b6.js";import"./BigNumber-DNM4Asro.js";import"./Breadcrumb-BVRejx5y.js";import"./Heading-4A_9k7B7.js";import"./Legend-CfpByMiV.js";import"./Color-CF8_g_Rt.js";import"./TableFooterRow-DKyMLwZS.js";import"./SkeletonText-mgkPpEwS.js";import"./Content-CugomRfa.js";import"./CounterBadge-B73tBZKq.js";import"./DonutChart-Bi52zQsm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-2cEex6ck.js";import"./Header-Daa8R0Vo.js";import"./Initials-BYiwEIK7.js";import"./InlineCode-vcmJPAHr.js";import"./LayoutCard-552oNMIB.js";import"./Separator-BzLOFugX.js";import"./MessageSeparator-CT9RS-8F.js";import"./NavigationGroup-bJXjtOzI.js";import"./Notification-DMDBZmDj.js";import"./NotificationProvider-Cdy3Vamk.js";import"./ProgressBar-YmHjvNRH.js";import"./Rating-B1PBw_H7.js";import"./Skeleton-DFoxDyNL.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await c(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
