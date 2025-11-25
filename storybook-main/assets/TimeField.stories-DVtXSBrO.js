import{j as r,r as f}from"./iframe-HHJxrKwA.js";import{c as a,u as p,F as c,t as j}from"./Form-DjHkdKgP.js";import{L as t}from"./Label-Cd3K2WO5.js";import{R as u,S as F}from"./ResetButton-T-tTjIbD.js";import{B as l}from"./Button-CMFIu-2V.js";import{S as b,s as d}from"./Section-Byk_fwnD.js";import{A as E}from"./ActionGroup-BwzLbpYf.js";import{ax as S,aw as o,F as T}from"./Modal-T9ideOdw.js";import"./index-nuYtCEEu.js";import"./dynamic-C72LaG0o.js";import"./flowComponent-xvY9fOVo.js";import"./index-kZYQ5p_C.js";import"./clsx-B-dksMZM.js";import"./index-DaaiETUi.js";import"./useLocalizedStringFormatter-DYYCi_Wo.js";import"./context-BPRr7l02.js";import"./browser-B_OFrHH8.js";import"./utils-CqW00CMD.js";import"./ProgressBar-BFgUsHfp.js";import"./Hidden-BU2s8wDC.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-wsvw38Iz.js";import"./Text-DpCjRkNG.js";import"./EmulatedBoldText-voWdu8Zi.js";import"./LoadingSpinner-CeGC15LV.js";import"./Button-CpujMQDr.js";import"./useFocusRing-Cv3jUmeb.js";import"./useFocusable-BvYt2clO.js";import"./context-BVuVVWhQ.js";import"./RSPContexts-CI2I3CcO.js";import"./Collection-AoD9PaOI.js";import"./CollectionBuilder-BljvGYLf.js";import"./SelectionIndicator-CSgFHR1s.js";import"./Separator-Dggcol34.js";import"./useStatic-DrdWJfEu.js";import"./FileCardList-D5TI9EMK.js";import"./Avatar-BL-u7Rdm.js";import"./AlertIcon-BGK-JIKH.js";import"./Image-BVGsM23c.js";import"./Link-DCbgeGNX.js";import"./ControlledNotification-KlNAuKxq.js";import"./Flex-C7vv3uag.js";import"./Accordion-BZ3ouy-_.js";import"./Alert-CwwRXMkc.js";import"./AlertBadge-D0eRjTre.js";import"./Align-B2oqC2QR.js";import"./AvatarStack-B6bz7kAB.js";import"./BigNumber-C7pZ7_lj.js";import"./Breadcrumb-DXXDE0Ik.js";import"./Heading-DYmofqbD.js";import"./Legend-B9dFpFZY.js";import"./Color-gAx7Pts-.js";import"./TableFooterRow-CEbqxy8h.js";import"./SkeletonText-PAxx1wq8.js";import"./Content-Dgn2c9yW.js";import"./CounterBadge-C_LNAor4.js";import"./DonutChart-CF4XtXhZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BA7YQChN.js";import"./Header-CYWloTaj.js";import"./Initials-BTKA_iJE.js";import"./InlineCode-37DSuu8y.js";import"./LayoutCard-DsQ2Pyni.js";import"./Separator-CMOVKCX6.js";import"./MessageSeparator-DnifOB9g.js";import"./NavigationGroup-CktbrD9Y.js";import"./Notification-Bu7C660S.js";import"./NotificationProvider-BH1LT37R.js";import"./ProgressBar-DiXmMAYK.js";import"./Rating-B5eof2ex.js";import"./Skeleton-CPNzswlC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await d(1500),g(h)},x=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(c,{form:x,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
