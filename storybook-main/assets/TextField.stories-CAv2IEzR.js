import{j as e,r as E}from"./iframe-FgJ_J-H0.js";import{A as j}from"./ActionGroup-BJ9qHrpp.js";import{B as f}from"./Button-DAV102-b.js";import{L as t}from"./Label-dIFs3d3H.js";import{S as b,s as p}from"./Section-KcKraSFk.js";import{T as n,g as B}from"./TimeField-Co7GP2GW.js";import{b as h,u,F as c,t as S}from"./Form-BVuPoSOi.js";import{R as x,S as F}from"./ResetButton-jFpFjYeg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CcSJ2V2H.js";import"./PropsContextProvider-D4ZDxBE5.js";import"./mergeRefs-B0SFCKpc.js";import"./index-D5Q5r0EQ.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CTwTuPoy.js";import"./Text-DFL3SoXQ.js";import"./browser-DUTkZfBO.js";import"./utils-CpAt2MQ0.js";import"./EmulatedBoldText-B0xGhkgA.js";import"./LoadingSpinner-D-ZvoQWA.js";import"./Button-D1iDLFQk.js";import"./ProgressBar-C9bgo184.js";import"./Hidden-fZuF_gJA.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BdkCFUfw.js";import"./useFocusRing-DWyZOWS1.js";import"./useFocusable-CcMdE3Gl.js";import"./useLocalizedStringFormatter-T_wC2jpb.js";import"./context-Zd06eDB-.js";import"./RSPContexts-BtQRbm6D.js";import"./Collection-DzrsfNpG.js";import"./CollectionBuilder-BkEo1yPT.js";import"./SelectionIndicator-DXbR8Lbk.js";import"./Separator-CEsI0Otd.js";import"./useStatic-C1zZPFiS.js";import"./Accordion-io5UELOJ.js";import"./Alert-9jMZJopr.js";import"./AlertIcon-B3uKWtQk.js";import"./AlertBadge-H-rDyqf-.js";import"./Align-DmzMsv0T.js";import"./Popover-CMikV-wU.js";import"./OverlayTrigger--5L_1U0w.js";import"./TableFooterRow-CtbyytXV.js";import"./SkeletonText-6QEWsZGr.js";import"./Avatar-ClmGh38b.js";import"./AvatarStack-D2Xx6Bnf.js";import"./Badge-Dr16W0CP.js";import"./BigNumber-Dk3uhm2m.js";import"./Breadcrumb-BzzlR0li.js";import"./Link-BTa1ooRS.js";import"./Heading-CtwLqgxn.js";import"./Legend-D3LNNeFG.js";import"./FileCardList-B85HNlbk.js";import"./Image-Dt2xjXWg.js";import"./Color-Bp0ZXAXD.js";import"./Content-Gw2uLkjU.js";import"./ContextualHelpTrigger-4SkGlWeV.js";import"./CounterBadge-BXJ7T0jf.js";import"./DonutChart-C4u46woz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BQ4xIGSR.js";import"./Header-DyVj_TzU.js";import"./Initials-Cm_DyWr3.js";import"./InlineCode-CZw0TC9N.js";import"./PopoverTrigger-CaH8hJY-.js";import"./Separator-lfjcoKvM.js";import"./Message-K29IWi_M.js";import"./MessageSeparator-DPflMeSl.js";import"./NavigationGroup-B5RjEnqs.js";import"./Notification-BfVd4W3J.js";import"./NotificationProvider-CQgaoiA5.js";import"./ProgressBar-DUshVboI.js";import"./Rating-C77bfPzz.js";import"./Skeleton-CN4c_iAv.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),He={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
