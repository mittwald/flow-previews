import{j as e,r as E}from"./iframe-b3Ga2wpf.js";import{A as j}from"./ActionGroup-C8Oe2XUd.js";import{B as f}from"./Button-B9AKUFf2.js";import{L as t}from"./Label-BM4rj9TZ.js";import{S as b,s as p}from"./Section-DpTqM0_J.js";import{T as n,g as B}from"./TimeField-CtNImo6o.js";import{b as h,u,F as c,t as S}from"./Form-DtrXwySn.js";import{R as x,S as F}from"./ResetButton-Db35grC4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7f7XAFP.js";import"./PropsContextProvider-D77bvxtu.js";import"./mergeRefs-Bi5mFM62.js";import"./index-EgQfkxQH.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C84U4k_5.js";import"./remote-DrytLFaS.js";import"./Text-DIbSGP69.js";import"./browser-C0SY9BaM.js";import"./utils-DpwAoq2B.js";import"./EmulatedBoldText-BWSYK2_K.js";import"./LoadingSpinner-C8TYwtnu.js";import"./Button-Dn9RG0lS.js";import"./ProgressBar-CqHSuyvS.js";import"./Hidden-D7Ffx1fO.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-D39ROL5s.js";import"./useFocusRing-DyTaHyNc.js";import"./useFocusable-CNSeA0E2.js";import"./useLocalizedStringFormatter-Dw2puoxj.js";import"./context-DvKCdNAh.js";import"./RSPContexts-CzK-yBpk.js";import"./Collection-staaIP_8.js";import"./CollectionBuilder-DkVC1udd.js";import"./SelectionIndicator-H6x9m8Fd.js";import"./Separator-CC7MupLF.js";import"./useStatic-DjEoLORA.js";import"./Accordion-DJRFgKSV.js";import"./Alert-BFE5O_K9.js";import"./AlertIcon-BoIjIGQk.js";import"./AlertBadge-Dc59NCSn.js";import"./Align-DkScujGZ.js";import"./Popover-C3t-XhdJ.js";import"./OverlayTrigger-9eU9gIuc.js";import"./TableFooterRow-CtVIdWAI.js";import"./SkeletonText-6MyMR-o8.js";import"./Avatar-DRdoqq5g.js";import"./AvatarStack-Bm59_WJp.js";import"./Badge-CmiaY70P.js";import"./BigNumber-jt1NPm7F.js";import"./Breadcrumb-BZ7G-TEM.js";import"./Link-fVLJAih1.js";import"./Heading-BGN7eCNA.js";import"./Legend-BeSc5K-M.js";import"./FileCardList-Cu-7JGuA.js";import"./Image-pfb7qnpC.js";import"./Color-q6pWurkX.js";import"./Content-CZqLB91a.js";import"./ContextualHelpTrigger-B4h5NCtb.js";import"./CounterBadge-Dnci99L1.js";import"./DonutChart-D0dIo1ZK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dp1INIeU.js";import"./Header-HXXe6hHp.js";import"./Initials-BTQbHA9Y.js";import"./InlineCode-BynVVMmO.js";import"./PopoverTrigger-aR-yTA7m.js";import"./Separator-C1t0NjGv.js";import"./Message-CJlFlLd8.js";import"./MessageSeparator-Dfvdn_tJ.js";import"./NavigationGroup-gO8yiDJt.js";import"./Notification-Biyx_ImO.js";import"./NotificationProvider-CZZ8UITu.js";import"./ProgressBar-DU1jY53e.js";import"./Rating-C6_n-TNa.js";import"./Skeleton-DwbvfRV4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Je={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ke=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ke as __namedExportsOrder,Je as default};
