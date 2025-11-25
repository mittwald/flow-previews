import{j as e,r as g}from"./iframe-D6fHsxXv.js";import{A as j}from"./ActionGroup-Bn5GGBe3.js";import{B as c}from"./Button-ByZH5IaN.js";import{L as n}from"./Label-BFZcxZYB.js";import{S as b,s as h}from"./Section-DZa8lXDk.js";import{T as i,F as B}from"./Modal-CGXu-7BF.js";import{b as F,u as d,F as u,t as S}from"./Form-aMcCtTdR.js";import{R as f,S as x}from"./ResetButton-D26IFSpx.js";import"./index-nuYtCEEu.js";import"./dynamic-BLI65pIy.js";import"./flowComponent-CyxS6jtd.js";import"./index-a9Z31mTH.js";import"./clsx-B-dksMZM.js";import"./index-BN2jmjED.js";import"./IconWarning-BQPhDOnw.js";import"./Text-BlUe4lOx.js";import"./browser-CwuXyXeK.js";import"./utils-CX0v46bh.js";import"./EmulatedBoldText-C3KADN9z.js";import"./LoadingSpinner-YR9PsY9I.js";import"./Button-CGoM5cNA.js";import"./ProgressBar-p_vCaDV8.js";import"./Hidden-DOuWayhK.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DBHOSboP.js";import"./useFocusRing-mSLmiDmW.js";import"./useFocusable-C5yjySsw.js";import"./useLocalizedStringFormatter-CFiZqHkg.js";import"./context-B25Uysh-.js";import"./RSPContexts-ot9YLsND.js";import"./Collection-C7VAUULI.js";import"./CollectionBuilder-Da2MDVhj.js";import"./SelectionIndicator-BI8Ai2Ij.js";import"./Separator-CsPA1GTq.js";import"./useStatic-ZhhRmIwk.js";import"./FileCardList-CKOF_41c.js";import"./Avatar-BZa2aNzB.js";import"./AlertIcon-y7uDyP2w.js";import"./Image-BE61ZkEV.js";import"./Link-BXLnihOz.js";import"./ControlledNotification-DW7-c_1o.js";import"./Flex-Bnwwl7yh.js";import"./Accordion-BNspTTT6.js";import"./Alert-QOLcAREl.js";import"./AlertBadge-D8pE3XVJ.js";import"./Align-jX76HIXo.js";import"./AvatarStack-D1CQ9CP4.js";import"./BigNumber-HDD6Ha1g.js";import"./Breadcrumb-C3NrF8Li.js";import"./Heading-CN7gV4ri.js";import"./Legend-g2tREy-a.js";import"./Color-Bkm_a0pP.js";import"./TableFooterRow-DGrjNW1t.js";import"./SkeletonText-3m6Qm9dA.js";import"./Content-CavwTwhy.js";import"./CounterBadge-CM2z3a4b.js";import"./DonutChart-BhFaY8J1.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DyavuTK0.js";import"./Header-OT8Q3euI.js";import"./Initials-CZzuu5uh.js";import"./InlineCode-CKBf34T8.js";import"./LayoutCard-3KlgAbCz.js";import"./Separator-DVOspp54.js";import"./MessageSeparator-CCKnTU1s.js";import"./NavigationGroup-DV-BiGeA.js";import"./Notification-C3O4RVn7.js";import"./NotificationProvider-DlGFFFM5.js";import"./ProgressBar-DAX1bvy4.js";import"./Rating-Dfz4xv42.js";import"./Skeleton-sfWcrayS.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:F,render:()=>{const t=async o=>{await h(1500),E(o)},r=d({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"nameDefaultValue",children:e.jsx(i,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(c,{onPress:()=>r.setValue("nameDefaultValue","horst"),children:"Set"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:()=>{const t=o=>{E(o)},r=d({defaultValues:{name:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"name",children:e.jsx(i,{value:r.watch("name"),onChange:o=>{r.setValue("name",o.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},a={render:()=>{const t=d();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(i,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},l={render:t=>{const r=d();return e.jsxs(u,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{...t,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(c,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(c,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...l.parameters?.docs?.source}}};const Ue=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{m as Default,a as WithFieldError,l as WithFocus,s as WithTransformedValue,Ue as __namedExportsOrder,Ge as default};
