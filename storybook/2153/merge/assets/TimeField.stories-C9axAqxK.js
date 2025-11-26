import{j as r,r as f}from"./iframe-QYf_yreC.js";import{b as a,u as p,F as d,t as j}from"./Form-SyGNl1L6.js";import{L as t}from"./Label-DkpOuIpZ.js";import{R as u,S as F}from"./ResetButton-Bk_LcARC.js";import{B as l}from"./Button-ClcJ4r4J.js";import{S as b,s as c}from"./Section-B2DHZKCC.js";import{A as E}from"./ActionGroup-CNS7lIAN.js";import{ax as S,aw as o,F as T}from"./Modal-BZuSJnKZ.js";import"./index-nuYtCEEu.js";import"./dynamic-DxvJo010.js";import"./flowComponent-BlD0f313.js";import"./index-DrqlcLhB.js";import"./clsx-B-dksMZM.js";import"./index-Dl4zJFgP.js";import"./useLocalizedStringFormatter-BSKtfzGO.js";import"./context-DoHwa-Uz.js";import"./browser-BbcMJkiW.js";import"./utils-9temXcui.js";import"./ProgressBar-BpNDlZ7L.js";import"./Hidden-D4BgLsni.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CJ0iL8xC.js";import"./Text-DYo1hnMM.js";import"./EmulatedBoldText-BUtEOorO.js";import"./LoadingSpinner-DyzLehc_.js";import"./Button-BY7Kz_qM.js";import"./useFocusRing-CKFComO5.js";import"./useFocusable-Bm9MC9Cg.js";import"./context-BGZffbOF.js";import"./RSPContexts-CQ49TXVP.js";import"./Collection-DjuEe1dE.js";import"./CollectionBuilder-Ce2bTmZV.js";import"./SelectionIndicator-DHFL4Bc-.js";import"./Separator-DJyRay3v.js";import"./useStatic-CgWt-Vtk.js";import"./FileCardList-DTUmUWf5.js";import"./Avatar-B_ln5OAs.js";import"./AlertIcon-DGipYwqO.js";import"./Image-CSQDDycD.js";import"./Link-VGOGyvf3.js";import"./ControlledNotification-CA1OLKqo.js";import"./Flex-FeaqVm2Q.js";import"./Accordion-QaDyvb9t.js";import"./Alert-bj_Y0zgx.js";import"./AlertBadge-ClDIorBf.js";import"./Align-B8IK4Kvb.js";import"./AvatarStack-S7hrW2Du.js";import"./BigNumber-Ct2H2kB1.js";import"./Breadcrumb-B5Ha9Tr5.js";import"./Heading-Ztp4MNID.js";import"./Legend-BN69fYiw.js";import"./Color-Bp6xg0fX.js";import"./TableFooterRow-DqL_vA4D.js";import"./SkeletonText-DntNO9xb.js";import"./Content-ysq6PY7h.js";import"./CounterBadge-CnGG8oCU.js";import"./DonutChart-Bw-cC5fd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrN3wwhj.js";import"./Header-NzTBG9RN.js";import"./Initials-D93mZZQg.js";import"./InlineCode-Y0cx0rl0.js";import"./LayoutCard-C6WMVQDl.js";import"./Separator-vqPdnx36.js";import"./MessageSeparator-C5w9jueb.js";import"./NavigationGroup-DrewGvf7.js";import"./Notification-Dfr21Mg6.js";import"./NotificationProvider-Cnm_GiLp.js";import"./ProgressBar-D7-_y3N0.js";import"./Rating-4NQ2FU04.js";import"./Skeleton-CnrauAdF.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},x=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Hr as __namedExportsOrder,Gr as default};
