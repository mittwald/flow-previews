import{j as r,r as f}from"./iframe-tNeMQtR9.js";import{b as a,u as p,F as d,t as j}from"./Form-CZq0j07w.js";import{L as t}from"./Label-QQ-I3K-S.js";import{R as u,S as F}from"./ResetButton-DjLAqSBa.js";import{B as l}from"./Button-evMO-5rj.js";import{S as b,s as c}from"./Section-CWr8AAoQ.js";import{A as E}from"./ActionGroup-BG5GPQGU.js";import{ax as S,aw as o,F as T}from"./Modal-BTUku4xq.js";import"./index-nuYtCEEu.js";import"./dynamic-C77k3JSm.js";import"./flowComponent-Cm6q17-o.js";import"./index-KVcqOv8o.js";import"./clsx-B-dksMZM.js";import"./index-CkwyjQRx.js";import"./useLocalizedStringFormatter-BvPPnk_e.js";import"./context-CPiapOtt.js";import"./browser-tvBxR0oJ.js";import"./utils-COmC6Eka.js";import"./ProgressBar-CqKQSfDd.js";import"./Hidden-Cg7taIb1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CQOJDPfQ.js";import"./Text-C2VO0De_.js";import"./EmulatedBoldText-Cjn4wbX9.js";import"./LoadingSpinner-CNWC6196.js";import"./Button-BinTn0sL.js";import"./useFocusRing-CrzENmB0.js";import"./useFocusable-BOEQm_aX.js";import"./context-Cey1J_Al.js";import"./RSPContexts-DY330ZPC.js";import"./Collection-BtpQxErv.js";import"./CollectionBuilder-DjYSc1J7.js";import"./SelectionIndicator-CUsz2YTu.js";import"./Separator-DgMEcD2E.js";import"./useStatic-D2eB1aGn.js";import"./FileCardList-BMiH65Ui.js";import"./Avatar-DDlp-vfW.js";import"./AlertIcon-Bzk-eUz1.js";import"./Image-CCt_1c0z.js";import"./Link-D-oNPjX9.js";import"./ControlledNotification-BwqgxSUH.js";import"./Flex-rZ8v-_CO.js";import"./Accordion-B23Ox3j7.js";import"./Alert-DZNlkX8e.js";import"./AlertBadge-D7TFwUaN.js";import"./Align-DCuTz2PT.js";import"./AvatarStack-8752QnfM.js";import"./BigNumber-CjI3llLI.js";import"./Breadcrumb-BQFrdOyt.js";import"./Heading-C8p-a7zJ.js";import"./Legend-DGYMeAYO.js";import"./Color-CkZmA5bq.js";import"./TableFooterRow-C3NFPVoX.js";import"./SkeletonText-VT80yi-y.js";import"./Content-CJ0-JcWV.js";import"./CounterBadge-DMa-J370.js";import"./DonutChart-LklFYUFk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CXJ82N6E.js";import"./Header-6aMHBv44.js";import"./Initials-DngG0C9b.js";import"./InlineCode-DyN8wBPc.js";import"./LayoutCard-CuTcuwsm.js";import"./Separator-YVCX1fHW.js";import"./MessageSeparator-CgLaydGc.js";import"./NavigationGroup-BfN1VqG1.js";import"./Notification-jWU6KLhG.js";import"./NotificationProvider-C8ET-e-A.js";import"./ProgressBar-Bcq6KtH-.js";import"./Rating-kZ5WeiDB.js";import"./Skeleton-kxM3gt-s.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},x=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
