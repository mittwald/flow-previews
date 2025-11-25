import{j as r,r as j}from"./iframe-D6fHsxXv.js";import{b as a,u as d,F as c,t as b}from"./Form-aMcCtTdR.js";import{L as t}from"./Label-BFZcxZYB.js";import{R as f,S as h}from"./ResetButton-D26IFSpx.js";import{B as u}from"./Button-ByZH5IaN.js";import{S as E,s as p}from"./Section-DZa8lXDk.js";import{A as S}from"./ActionGroup-Bn5GGBe3.js";import{H as l,G as o,$ as D,I as B,F as g}from"./Modal-CGXu-7BF.js";import"./index-nuYtCEEu.js";import"./dynamic-BLI65pIy.js";import"./flowComponent-CyxS6jtd.js";import"./index-a9Z31mTH.js";import"./clsx-B-dksMZM.js";import"./index-BN2jmjED.js";import"./useLocalizedStringFormatter-CFiZqHkg.js";import"./context-DBHOSboP.js";import"./browser-CwuXyXeK.js";import"./utils-CX0v46bh.js";import"./ProgressBar-p_vCaDV8.js";import"./Hidden-DOuWayhK.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BQPhDOnw.js";import"./Text-BlUe4lOx.js";import"./EmulatedBoldText-C3KADN9z.js";import"./LoadingSpinner-YR9PsY9I.js";import"./Button-CGoM5cNA.js";import"./useFocusRing-mSLmiDmW.js";import"./useFocusable-C5yjySsw.js";import"./context-B25Uysh-.js";import"./RSPContexts-ot9YLsND.js";import"./Collection-C7VAUULI.js";import"./CollectionBuilder-Da2MDVhj.js";import"./SelectionIndicator-BI8Ai2Ij.js";import"./Separator-CsPA1GTq.js";import"./useStatic-ZhhRmIwk.js";import"./FileCardList-CKOF_41c.js";import"./Avatar-BZa2aNzB.js";import"./AlertIcon-y7uDyP2w.js";import"./Image-BE61ZkEV.js";import"./Link-BXLnihOz.js";import"./ControlledNotification-DW7-c_1o.js";import"./Flex-Bnwwl7yh.js";import"./Accordion-BNspTTT6.js";import"./Alert-QOLcAREl.js";import"./AlertBadge-D8pE3XVJ.js";import"./Align-jX76HIXo.js";import"./AvatarStack-D1CQ9CP4.js";import"./BigNumber-HDD6Ha1g.js";import"./Breadcrumb-C3NrF8Li.js";import"./Heading-CN7gV4ri.js";import"./Legend-g2tREy-a.js";import"./Color-Bkm_a0pP.js";import"./TableFooterRow-DGrjNW1t.js";import"./SkeletonText-3m6Qm9dA.js";import"./Content-CavwTwhy.js";import"./CounterBadge-CM2z3a4b.js";import"./DonutChart-BhFaY8J1.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DyavuTK0.js";import"./Header-OT8Q3euI.js";import"./Initials-CZzuu5uh.js";import"./InlineCode-CKBf34T8.js";import"./LayoutCard-3KlgAbCz.js";import"./Separator-DVOspp54.js";import"./MessageSeparator-CCKnTU1s.js";import"./NavigationGroup-DV-BiGeA.js";import"./Notification-C3O4RVn7.js";import"./NotificationProvider-DlGFFFM5.js";import"./ProgressBar-DAX1bvy4.js";import"./Rating-Dfz4xv42.js";import"./Skeleton-sfWcrayS.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Cr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await p(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(c,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
