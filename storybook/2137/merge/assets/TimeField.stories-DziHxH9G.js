import{j as r,r as f}from"./iframe-Du_qouD_.js";import{c as a,u as p,F as c,t as j}from"./Form-CbVRmMuM.js";import{L as t}from"./Label-DvpwKxrD.js";import{R as u,S as F}from"./ResetButton-C_wM_wok.js";import{B as l}from"./Button-BKlVJwIr.js";import{S as b,s as d}from"./Section-CP9sTMI1.js";import{A as E}from"./ActionGroup-c_vby5Es.js";import{aw as S,av as o,F as T}from"./Modal-MGKc6uhP.js";import"./index-nuYtCEEu.js";import"./dynamic-DNgOdReL.js";import"./flowComponent-rDAUUIs0.js";import"./index-D82te6aO.js";import"./clsx-B-dksMZM.js";import"./index-Cna9wk2l.js";import"./useLocalizedStringFormatter-BKry4ylq.js";import"./context-56QjP3j7.js";import"./browser-BIThWoNI.js";import"./utils-4z-LHo9M.js";import"./ProgressBar-C8JML2M-.js";import"./Hidden-CaZvTbg6.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BYd1-Vrn.js";import"./Text-DSmwKiK5.js";import"./EmulatedBoldText-B6vrvEtA.js";import"./LoadingSpinner-BVVVUtHG.js";import"./Button-9sEBXLr3.js";import"./useFocusRing-BYlN_rzy.js";import"./useFocusable-BqYSv_Ya.js";import"./context-DfFGI3iw.js";import"./RSPContexts-As5yeo4a.js";import"./Collection-BebXuOLE.js";import"./CollectionBuilder-D1Dgngsg.js";import"./SelectionIndicator-C_AcjXXq.js";import"./Separator-BJxFAi6I.js";import"./useStatic-6KqxvQye.js";import"./getActionGroupSlot-h_LfU4fO.js";import"./FileCardList--2ZieuqZ.js";import"./Avatar-oOQkBEoe.js";import"./AlertIcon-BgpHVoHm.js";import"./Image-B0yvlgyM.js";import"./Link-DmpqZIYe.js";import"./ControlledNotification-CTznOicW.js";import"./LayoutCard-CmyaRvn3.js";import"./Accordion-D5QR60XG.js";import"./Alert-Uq-uDDS4.js";import"./AlertBadge-DNhsD8PX.js";import"./Align-CyVr7OuT.js";import"./AvatarStack-B5s0vN09.js";import"./BigNumber-Bu3QLXdy.js";import"./Breadcrumb-CfGUSdKq.js";import"./Heading-BD53zFfj.js";import"./Legend-BiYpWzHE.js";import"./Color-7P_eHJ9S.js";import"./TableFooterRow-BddxhsDt.js";import"./SkeletonText-DpYKmaWm.js";import"./Content-COgSVb0P.js";import"./CounterBadge-DDdYZMsC.js";import"./DonutChart-Bdt4MC04.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be-RmoYN.js";import"./Header-DGdm1J9_.js";import"./Initials-C70OZOod.js";import"./InlineCode-Bj3DEPPw.js";import"./Separator-eScn2XrM.js";import"./MessageSeparator-Brh9XJMv.js";import"./NavigationGroup-DtZinfMC.js";import"./Notification-C9dD5dH2.js";import"./NotificationProvider-RI2P6NdS.js";import"./ProgressBar-CmgKYrsQ.js";import"./Rating-CkwJjaD1.js";import"./Skeleton-DIz56cOV.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await d(1500),g(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(c,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
