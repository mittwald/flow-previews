import{j as e,r as E}from"./iframe-DP8YDTL2.js";import{A as j}from"./ActionGroup-H4Md62tw.js";import{B as f}from"./Button-B0W1yT72.js";import{L as t}from"./Label-DHXZY79j.js";import{S as b,s as p}from"./Section-Co64I5rb.js";import{T as n,g as B}from"./TimeField-B4EG23Nt.js";import{b as h,u,F as c,t as S}from"./Form-CMLvOtlf.js";import{R as x,S as F}from"./ResetButton-Dax6fC2j.js";import"./index-nuYtCEEu.js";import"./dynamic-BTJXp5gG.js";import"./PropsContextProvider-B3HMXUKZ.js";import"./mergeRefs-DsuNZd-H.js";import"./index-CpbCmUJ7.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Bww0inpG.js";import"./Text-D-QDVbYg.js";import"./browser-SpSM5C6g.js";import"./utils-Dm1zmrBW.js";import"./EmulatedBoldText-Crt4TFM2.js";import"./LoadingSpinner-CpfR1KV-.js";import"./Button-DyaOfmyD.js";import"./ProgressBar-tqMwcDQP.js";import"./Hidden-DNrH43oS.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-02tevN2j.js";import"./useFocusRing-DixPSib4.js";import"./useFocusable-CgaYGH8g.js";import"./useLocalizedStringFormatter-CJMUKkFM.js";import"./context-BtDomXbz.js";import"./RSPContexts-BogeclaT.js";import"./Collection-CPT1vu3H.js";import"./CollectionBuilder-Dz9u6crH.js";import"./SelectionIndicator-YAID1d9m.js";import"./Separator-BJVU84qu.js";import"./useStatic-oAu8wkWB.js";import"./Accordion-HcBanqJd.js";import"./Alert-rrP5Gy9B.js";import"./AlertIcon-DVh6pESV.js";import"./AlertBadge-DweOtEPJ.js";import"./Align-BxTc4ez8.js";import"./Popover-CQf2aBwQ.js";import"./OverlayTrigger-B2YRG83_.js";import"./TableFooterRow-DOkZ36FW.js";import"./SkeletonText-DYVowVbT.js";import"./Avatar-CRCuFFh3.js";import"./AvatarStack-CxmOjPug.js";import"./Badge-DB4ZdCrx.js";import"./BigNumber-Cgbcuj9W.js";import"./Breadcrumb-B-drEY1z.js";import"./Link-DgZD2-cc.js";import"./Heading-DQ_JsPVE.js";import"./Legend-CfYbvXbX.js";import"./FileCardList-BkjUaEeO.js";import"./Image-Ckc0BKol.js";import"./Color-CCS7cSNH.js";import"./Content-6_dFeFDF.js";import"./ContextualHelpTrigger-BADDKsT4.js";import"./CounterBadge-CLIpLOvV.js";import"./DonutChart-Bhgjv56J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8Deauvc.js";import"./Header-Ba8EoW9O.js";import"./Initials-DulEZZDu.js";import"./InlineCode-B5Ery-yk.js";import"./PopoverTrigger-BJQfALxW.js";import"./Separator-KhxpKn3e.js";import"./Message-DCnkeZUC.js";import"./MessageSeparator-D1DZsiYE.js";import"./NavigationGroup-BUzA88tA.js";import"./Notification-cR9AaDvT.js";import"./NotificationProvider-Ci8ufUj9.js";import"./ProgressBar-BocbUUX5.js";import"./Rating-lsHc3-9S.js";import"./Skeleton-CLwkgNOY.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),He={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Je=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Je as __namedExportsOrder,He as default};
