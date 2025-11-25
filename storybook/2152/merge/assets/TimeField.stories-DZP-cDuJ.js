import{j as r,r as f}from"./iframe-Damah4Gk.js";import{c as a,u as p,F as c,t as j}from"./Form-BOLeESCu.js";import{L as t}from"./Label-BCkQwiDC.js";import{R as u,S as F}from"./ResetButton-CsNAH45N.js";import{B as l}from"./Button-DRLWgNzR.js";import{S as b,s as d}from"./Section-Nvq9HUcO.js";import{A as E}from"./ActionGroup-DEjgbrdM.js";import{aw as S,av as o,F as T}from"./Modal-B_yQEjWS.js";import"./index-nuYtCEEu.js";import"./dynamic-CEjum6Vy.js";import"./flowComponent-CYYwi6hk.js";import"./index-13wtP10s.js";import"./clsx-B-dksMZM.js";import"./index-CEgKTzya.js";import"./useLocalizedStringFormatter-DBwS74mm.js";import"./context-Ame_q6FO.js";import"./browser-BpoY0pz3.js";import"./utils-DZ-wAWvz.js";import"./ProgressBar-ApaXpyYi.js";import"./Hidden-CW7-PSlS.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C31Nhmtw.js";import"./Text-CM2awg96.js";import"./EmulatedBoldText-CePfFl55.js";import"./LoadingSpinner-1d0BHocu.js";import"./Button-D6H5v8ae.js";import"./useFocusRing-CjNeZb4R.js";import"./useFocusable-BIU-PHPJ.js";import"./context-DFVuuGoX.js";import"./RSPContexts-CTihTM1c.js";import"./Collection-VhWDtA4s.js";import"./CollectionBuilder-Be73SkTZ.js";import"./SelectionIndicator-Bnf6nu3E.js";import"./Separator-CcuGyaw4.js";import"./useStatic-BEJRqnxO.js";import"./FileCardList-Ci5r3U-c.js";import"./Avatar-Cai0w9S3.js";import"./AlertIcon-DULCpNPH.js";import"./Image-7D4tddpj.js";import"./Link-BsL3p7F7.js";import"./ControlledNotification-CjMfLUpX.js";import"./Flex-OzeXLOGS.js";import"./Accordion-Cw4810g4.js";import"./Alert-Cx3wd6pS.js";import"./AlertBadge-DNrr8zSV.js";import"./Align-C4GA7Znj.js";import"./AvatarStack-sta7pAol.js";import"./BigNumber-CNHEALEu.js";import"./Breadcrumb-BiBovG4Q.js";import"./Heading-DZZNbrhC.js";import"./Legend-B4DJDWjw.js";import"./Color-qtzJcxFz.js";import"./TableFooterRow-BGQmG6-s.js";import"./SkeletonText-D5TwXMfM.js";import"./Content-D81btMoA.js";import"./CounterBadge-D9Iy1GBz.js";import"./DonutChart-hzKFEReV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bp6SKaJw.js";import"./Header-Duz7H3Fe.js";import"./Initials-CSjNV__V.js";import"./InlineCode-Cg-iYsVS.js";import"./LayoutCard-C33sIfEG.js";import"./Separator-9du0K4-M.js";import"./MessageSeparator-BK4KxRRw.js";import"./NavigationGroup-DLgkr7wA.js";import"./Notification-D6I6SJC0.js";import"./NotificationProvider-CEo1qSg-.js";import"./ProgressBar-DbMvGVxW.js";import"./Rating-BnbEvWoV.js";import"./Skeleton-BZR1-od5.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await d(1500),g(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(c,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
