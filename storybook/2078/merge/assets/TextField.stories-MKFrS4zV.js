import{j as e,r as E}from"./iframe-D1IXLGfs.js";import{A as j}from"./ActionGroup-Dy6atzM_.js";import{B as f}from"./Button-C4C6Tlp0.js";import{L as t}from"./Label-DqDuDjZM.js";import{S as b,s as p}from"./Section-C53WOw1M.js";import{T as n,g as B}from"./TimeField-AGTx6k1i.js";import{b as h,u,F as c,t as S}from"./Form-Bff3UVAM.js";import{R as x,S as F}from"./ResetButton-DuVxIEvp.js";import"./index-nuYtCEEu.js";import"./dynamic-pDnrtSWy.js";import"./PropsContextProvider-C_Awy-Mb.js";import"./mergeRefs-beV1eqaE.js";import"./index-CvlGE98O.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BxNDhWjd.js";import"./Text-D1LKMi-w.js";import"./browser-tVHcyQIt.js";import"./utils-B-QWEDo7.js";import"./EmulatedBoldText-DH1aO4MF.js";import"./LoadingSpinner-7FjPacVo.js";import"./Button-CMJuT-cA.js";import"./ProgressBar-yyUOmkTp.js";import"./Hidden-CcqmDqte.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Co7rtKcb.js";import"./useFocusRing-D8NPA1ph.js";import"./useFocusable-C6Y2IEKU.js";import"./useLocalizedStringFormatter-B1FtVS3l.js";import"./context-5e9UnPLe.js";import"./RSPContexts-BgSWsIZW.js";import"./Collection-DvnA0NAr.js";import"./CollectionBuilder-DezSz7RI.js";import"./SelectionIndicator-CBNg2on9.js";import"./Separator-ifeGnJlj.js";import"./useStatic-CpvtqM-K.js";import"./Accordion-BzVkjqgY.js";import"./Alert-QHsz_O3h.js";import"./AlertIcon-D96GlUxX.js";import"./AlertBadge-BYlu6Hm_.js";import"./Align-B09u4AJz.js";import"./Popover-BXbsVRKM.js";import"./OverlayTrigger-B4YqZS9k.js";import"./TableFooterRow-JV1dlzn6.js";import"./SkeletonText-BvUdv64z.js";import"./Avatar-Dgoo8XLu.js";import"./AvatarStack-DtbcXK87.js";import"./Badge-C-697TDl.js";import"./BigNumber-D0ECKC0O.js";import"./Breadcrumb-BUr6ABI5.js";import"./Link-CxLhPbdv.js";import"./Heading-oQ8JRrCO.js";import"./Legend-CqX9YVYz.js";import"./FileCardList-B1MHdddU.js";import"./Image-BtTPpMHP.js";import"./Color-BS8KIqfb.js";import"./Content-BzpcLFjt.js";import"./ContextualHelpTrigger-DAOvEHNM.js";import"./CounterBadge-BX6TKafN.js";import"./DonutChart-JW7SWDsk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DShuYc2u.js";import"./Header-Dbn0HhfV.js";import"./Initials-D9ELne8C.js";import"./InlineCode-CUmJ0bpc.js";import"./PopoverTrigger-DVp_5BpC.js";import"./Separator-QPbWx2p8.js";import"./Message-BpdzFhxT.js";import"./MessageSeparator-BOJp8Opk.js";import"./NavigationGroup-CpG2utD2.js";import"./Notification-civqnTG1.js";import"./NotificationProvider-CNqrmsHu.js";import"./ProgressBar-JXuTyxt5.js";import"./Skeleton-Fe8-xAPK.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),ke={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const He=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,He as __namedExportsOrder,ke as default};
