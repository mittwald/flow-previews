import{j as e,r as E}from"./iframe-DpK2T2Nf.js";import{A as j}from"./ActionGroup-CLHBsVX4.js";import{B as f}from"./Button-KfPOVuM-.js";import{L as t}from"./Label-Dg6bYAOF.js";import{S as b,s as p}from"./Section-kGcYQ44e.js";import{T as n,g as B}from"./TimeField-BgQf6oTj.js";import{b as h,u,F as c,t as S}from"./Form-CkzEMyZX.js";import{R as x,S as F}from"./ResetButton-CiJw6KVL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CdnvgWlT.js";import"./PropsContextProvider-hxBwTeBf.js";import"./mergeRefs-dZVNHuSH.js";import"./index-Cxqu85Zl.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Cg4y-Lel.js";import"./remote-Cox__P30.js";import"./Text-ClluuiBD.js";import"./browser-Ckyi0rpL.js";import"./utils-5sSs2C2Q.js";import"./EmulatedBoldText-Bc0AgoG-.js";import"./LoadingSpinner-BQl4MMkz.js";import"./Button--HL08e3g.js";import"./ProgressBar-BP1RROy1.js";import"./Hidden-BSBCwIf4.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CrPZXd5J.js";import"./useFocusRing-XJTDMv14.js";import"./useFocusable-BDOA7VsR.js";import"./useLocalizedStringFormatter-CTYggBE6.js";import"./context-CPEq1qsE.js";import"./RSPContexts-7V3qTNb_.js";import"./Collection-C-I12dkD.js";import"./CollectionBuilder-DnacpWim.js";import"./SelectionIndicator-D-pfjXW7.js";import"./Separator-Dg6KLd5_.js";import"./useStatic-3aliboqk.js";import"./Accordion-AedciLQh.js";import"./Alert-DHDG4MsT.js";import"./AlertIcon-05dXw9V_.js";import"./AlertBadge-CiTXQfnp.js";import"./Align-BSBJJ5zM.js";import"./Popover-BkpsMHU6.js";import"./OverlayTrigger-Dvz2NSVn.js";import"./TableFooterRow-CnVEUuwp.js";import"./SkeletonText-DSV460fR.js";import"./Avatar-BrVjDT-U.js";import"./AvatarStack-45n5MqLA.js";import"./Badge-DcxmWiGs.js";import"./BigNumber-Cq7hcHwo.js";import"./Breadcrumb-B1G9czV2.js";import"./Link-CNUblXN_.js";import"./Heading-CcD2dsF3.js";import"./Legend-CEh7Zw0y.js";import"./FileCardList-vN5JX68X.js";import"./Image-C1ftWFwl.js";import"./Color-DQzo7sAT.js";import"./Content-9dvKA7Z7.js";import"./ContextualHelpTrigger-CBiXLQUX.js";import"./CounterBadge-C-xbOE4o.js";import"./DonutChart-DJ670UUe.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DCNzeETN.js";import"./Header-eZj9M83o.js";import"./Initials-DhFZ0NCC.js";import"./InlineCode-08Yq6ux1.js";import"./PopoverTrigger-DK96Ugpl.js";import"./Separator-EDbsgt1x.js";import"./Message-C8l33cRQ.js";import"./MessageSeparator-B4es_r1t.js";import"./NavigationGroup-CzqtYd5z.js";import"./Notification-DFv7qa6j.js";import"./NotificationProvider-mo_Pr_YX.js";import"./ProgressBar-COfErnlM.js";import"./Rating-BjEvYZAj.js";import"./Skeleton-Dv7muKa-.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Je={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
