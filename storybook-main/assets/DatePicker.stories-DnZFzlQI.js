import{j as r,r as j}from"./iframe-HHJxrKwA.js";import{c as a,u as d,F as c,t as b}from"./Form-DjHkdKgP.js";import{L as t}from"./Label-Cd3K2WO5.js";import{R as f,S as h}from"./ResetButton-T-tTjIbD.js";import{B as u}from"./Button-CMFIu-2V.js";import{S as E,s as p}from"./Section-Byk_fwnD.js";import{A as S}from"./ActionGroup-BwzLbpYf.js";import{H as l,G as o,$ as D,I as B,F as g}from"./Modal-T9ideOdw.js";import"./index-nuYtCEEu.js";import"./dynamic-C72LaG0o.js";import"./flowComponent-xvY9fOVo.js";import"./index-kZYQ5p_C.js";import"./clsx-B-dksMZM.js";import"./index-DaaiETUi.js";import"./useLocalizedStringFormatter-DYYCi_Wo.js";import"./context-BPRr7l02.js";import"./browser-B_OFrHH8.js";import"./utils-CqW00CMD.js";import"./ProgressBar-BFgUsHfp.js";import"./Hidden-BU2s8wDC.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-wsvw38Iz.js";import"./Text-DpCjRkNG.js";import"./EmulatedBoldText-voWdu8Zi.js";import"./LoadingSpinner-CeGC15LV.js";import"./Button-CpujMQDr.js";import"./useFocusRing-Cv3jUmeb.js";import"./useFocusable-BvYt2clO.js";import"./context-BVuVVWhQ.js";import"./RSPContexts-CI2I3CcO.js";import"./Collection-AoD9PaOI.js";import"./CollectionBuilder-BljvGYLf.js";import"./SelectionIndicator-CSgFHR1s.js";import"./Separator-Dggcol34.js";import"./useStatic-DrdWJfEu.js";import"./FileCardList-D5TI9EMK.js";import"./Avatar-BL-u7Rdm.js";import"./AlertIcon-BGK-JIKH.js";import"./Image-BVGsM23c.js";import"./Link-DCbgeGNX.js";import"./ControlledNotification-KlNAuKxq.js";import"./Flex-C7vv3uag.js";import"./Accordion-BZ3ouy-_.js";import"./Alert-CwwRXMkc.js";import"./AlertBadge-D0eRjTre.js";import"./Align-B2oqC2QR.js";import"./AvatarStack-B6bz7kAB.js";import"./BigNumber-C7pZ7_lj.js";import"./Breadcrumb-DXXDE0Ik.js";import"./Heading-DYmofqbD.js";import"./Legend-B9dFpFZY.js";import"./Color-gAx7Pts-.js";import"./TableFooterRow-CEbqxy8h.js";import"./SkeletonText-PAxx1wq8.js";import"./Content-Dgn2c9yW.js";import"./CounterBadge-C_LNAor4.js";import"./DonutChart-CF4XtXhZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BA7YQChN.js";import"./Header-CYWloTaj.js";import"./Initials-BTKA_iJE.js";import"./InlineCode-37DSuu8y.js";import"./LayoutCard-DsQ2Pyni.js";import"./Separator-CMOVKCX6.js";import"./MessageSeparator-DnifOB9g.js";import"./NavigationGroup-CktbrD9Y.js";import"./Notification-Bu7C660S.js";import"./NotificationProvider-BH1LT37R.js";import"./ProgressBar-DiXmMAYK.js";import"./Rating-B5eof2ex.js";import"./Skeleton-CPNzswlC.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Cr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await p(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(c,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Cr as default};
