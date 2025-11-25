import{j as r,r as x}from"./iframe-BGRRgBVS.js";import{c as l,u as a,F as c,t as j}from"./Form-DD4eZ7E5.js";import{L as s}from"./Label-C71FRL96.js";import{R as p,S as d}from"./ResetButton-5WJyOJKD.js";import{B as t}from"./Button-DE3NXKd3.js";import{S,s as u}from"./Section-CxYjgLxV.js";import{A as b}from"./ActionGroup-J5J8sMqL.js";import{s as m,F as B}from"./Modal-B7HK7gsm.js";import"./index-nuYtCEEu.js";import"./dynamic-BLodhe7F.js";import"./flowComponent-DxP1iS0K.js";import"./index-BZgSK6Sm.js";import"./clsx-B-dksMZM.js";import"./index-BMa1Nvcv.js";import"./useLocalizedStringFormatter-q3-eKfRR.js";import"./context-u16jW8Lq.js";import"./browser-ClmblGlM.js";import"./utils-Csx1o_4e.js";import"./ProgressBar-DH5v7dhL.js";import"./Hidden-BonuGHXz.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-H-qi_LLu.js";import"./Text-DzPdDmfA.js";import"./EmulatedBoldText-DrL9qLDd.js";import"./LoadingSpinner-uAo8ll_j.js";import"./Button-BqwVNYKG.js";import"./useFocusRing-DfB0I3XE.js";import"./useFocusable-DNKvZOnB.js";import"./context-BRtiiBiN.js";import"./RSPContexts-DYF8VjHX.js";import"./Collection-CVup-l4E.js";import"./CollectionBuilder-VI38YI2I.js";import"./SelectionIndicator-C9TSpSC8.js";import"./Separator-BlumgMKZ.js";import"./useStatic-CZqew5Ty.js";import"./FileCardList-CTiEP_oD.js";import"./Avatar-_Q-1CRZY.js";import"./AlertIcon-DXcBlIQl.js";import"./Image-m8wJl4Hq.js";import"./Link-DUHrLYIV.js";import"./ControlledNotification-ClQ4DWvA.js";import"./Flex-Cm5MtHoW.js";import"./Accordion-CWMlovg1.js";import"./Alert-DZ3SaNfX.js";import"./AlertBadge-BP8QuAoC.js";import"./Align-XZN-93fT.js";import"./AvatarStack-naPDjz-Y.js";import"./BigNumber-B2BemRIb.js";import"./Breadcrumb-89IOhSC8.js";import"./Heading-Cumb0HFc.js";import"./Legend-Cfzh9jRu.js";import"./Color-DhuO5H_5.js";import"./TableFooterRow-DxdhKCQ5.js";import"./SkeletonText-CETwMYrU.js";import"./Content-WUqaR34u.js";import"./CounterBadge-jsL76cSL.js";import"./DonutChart-CBKPVTFl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-fuO6rZ67.js";import"./Header-CWu5q_yZ.js";import"./Initials-wMj0dCzb.js";import"./InlineCode-BW_4nfEu.js";import"./LayoutCard-BYw3vf8Y.js";import"./Separator-DYQ__sSx.js";import"./MessageSeparator-C9JYZyz7.js";import"./NavigationGroup-BS96zRf9.js";import"./Notification-BxWa1kbr.js";import"./NotificationProvider-O7MbGuDR.js";import"./ProgressBar-Fo13G1Rz.js";import"./Rating-DPKBC8ZF.js";import"./Skeleton-CCnLs0pz.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
