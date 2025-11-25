import{j as r,r as x}from"./iframe-Damah4Gk.js";import{c as l,u as a,F as c,t as j}from"./Form-BOLeESCu.js";import{L as s}from"./Label-BCkQwiDC.js";import{R as p,S as d}from"./ResetButton-CsNAH45N.js";import{B as t}from"./Button-DRLWgNzR.js";import{S,s as u}from"./Section-Nvq9HUcO.js";import{A as b}from"./ActionGroup-DEjgbrdM.js";import{s as m,F as B}from"./Modal-B_yQEjWS.js";import"./index-nuYtCEEu.js";import"./dynamic-CEjum6Vy.js";import"./flowComponent-CYYwi6hk.js";import"./index-13wtP10s.js";import"./clsx-B-dksMZM.js";import"./index-CEgKTzya.js";import"./useLocalizedStringFormatter-DBwS74mm.js";import"./context-Ame_q6FO.js";import"./browser-BpoY0pz3.js";import"./utils-DZ-wAWvz.js";import"./ProgressBar-ApaXpyYi.js";import"./Hidden-CW7-PSlS.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C31Nhmtw.js";import"./Text-CM2awg96.js";import"./EmulatedBoldText-CePfFl55.js";import"./LoadingSpinner-1d0BHocu.js";import"./Button-D6H5v8ae.js";import"./useFocusRing-CjNeZb4R.js";import"./useFocusable-BIU-PHPJ.js";import"./context-DFVuuGoX.js";import"./RSPContexts-CTihTM1c.js";import"./Collection-VhWDtA4s.js";import"./CollectionBuilder-Be73SkTZ.js";import"./SelectionIndicator-Bnf6nu3E.js";import"./Separator-CcuGyaw4.js";import"./useStatic-BEJRqnxO.js";import"./FileCardList-Ci5r3U-c.js";import"./Avatar-Cai0w9S3.js";import"./AlertIcon-DULCpNPH.js";import"./Image-7D4tddpj.js";import"./Link-BsL3p7F7.js";import"./ControlledNotification-CjMfLUpX.js";import"./Flex-OzeXLOGS.js";import"./Accordion-Cw4810g4.js";import"./Alert-Cx3wd6pS.js";import"./AlertBadge-DNrr8zSV.js";import"./Align-C4GA7Znj.js";import"./AvatarStack-sta7pAol.js";import"./BigNumber-CNHEALEu.js";import"./Breadcrumb-BiBovG4Q.js";import"./Heading-DZZNbrhC.js";import"./Legend-B4DJDWjw.js";import"./Color-qtzJcxFz.js";import"./TableFooterRow-BGQmG6-s.js";import"./SkeletonText-D5TwXMfM.js";import"./Content-D81btMoA.js";import"./CounterBadge-D9Iy1GBz.js";import"./DonutChart-hzKFEReV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bp6SKaJw.js";import"./Header-Duz7H3Fe.js";import"./Initials-CSjNV__V.js";import"./InlineCode-Cg-iYsVS.js";import"./LayoutCard-C33sIfEG.js";import"./Separator-9du0K4-M.js";import"./MessageSeparator-BK4KxRRw.js";import"./NavigationGroup-DLgkr7wA.js";import"./Notification-D6I6SJC0.js";import"./NotificationProvider-CEo1qSg-.js";import"./ProgressBar-DbMvGVxW.js";import"./Rating-BnbEvWoV.js";import"./Skeleton-BZR1-od5.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Hr as __namedExportsOrder,Gr as default};
