import{j as e,r as E}from"./iframe-DOEJXvGk.js";import{A as j}from"./ActionGroup-ZPTq9sUD.js";import{B as f}from"./Button-BYGUtkd2.js";import{L as t}from"./Label-CHbDmU_0.js";import{S as b,s as p}from"./Section-BqMXvD2Y.js";import{T as n,g as B}from"./TimeField-DzkbFTLr.js";import{b as h,u,F as c,t as S}from"./Form-UjzAV8c2.js";import{R as x,S as F}from"./ResetButton-BFU_0WFQ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-yU3-i23D.js";import"./PropsContextProvider-Ccrn_JGz.js";import"./mergeRefs-BUxfbHrI.js";import"./index-cXd2_Nql.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Ci_z427u.js";import"./Text-D2s12SBY.js";import"./browser-DH30uIAM.js";import"./utils-DdqmmzJ9.js";import"./EmulatedBoldText-8EHop2RJ.js";import"./LoadingSpinner-C3IBuXDG.js";import"./Button-DlVwZwD1.js";import"./ProgressBar-DdcYoj3j.js";import"./Hidden-BmzTuRrq.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-fI8vs3af.js";import"./useFocusRing-8zbAs-ap.js";import"./useFocusable-DGnKZu4u.js";import"./useLocalizedStringFormatter-sTlF3R26.js";import"./context-ClAoL54q.js";import"./RSPContexts-bWk5q8vU.js";import"./Collection-Dx7U-2xV.js";import"./CollectionBuilder-CplTTDmS.js";import"./SelectionIndicator-D1mCVvRy.js";import"./Separator-vJb5vpxT.js";import"./useStatic-DU36eiHs.js";import"./Accordion-DrpzS9Tu.js";import"./Alert-Dz6Txycm.js";import"./AlertIcon-DeM3Y1y8.js";import"./AlertBadge-F2NWY7KX.js";import"./Align-Wr8YCtA6.js";import"./Popover-DVCzA5rA.js";import"./OverlayTrigger-DmCvlVUl.js";import"./TableFooterRow-BqdPD20e.js";import"./SkeletonText-DM-BrczZ.js";import"./Avatar-AfEQ8aJ7.js";import"./AvatarStack-PbGcOMzO.js";import"./Badge-CoMRyfRW.js";import"./BigNumber-BuS1c3m1.js";import"./Breadcrumb-CGjUpZnK.js";import"./Link-BnTqUE_d.js";import"./Heading-B55jlt0S.js";import"./Legend-BR0OJkN5.js";import"./FileCardList-BfoXr3eL.js";import"./Image-Bzob2sy0.js";import"./Color-C7W8ONo_.js";import"./Content-BvjUUUqh.js";import"./ContextualHelpTrigger-SA4yZZHq.js";import"./CounterBadge-Bq8ZiO3w.js";import"./DonutChart-D4hkpW0U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BGYJy9GV.js";import"./Header-DpcvefSw.js";import"./Initials-Bo59F16W.js";import"./InlineCode-D_4JxDia.js";import"./PopoverTrigger-BL7IIJoh.js";import"./Separator-BKXlt3AK.js";import"./Message-DDZrbHos.js";import"./MessageSeparator-BlAKvn2O.js";import"./NavigationGroup-b6mYgSHm.js";import"./Notification-Btu7hZt1.js";import"./NotificationProvider-QjMkPqGI.js";import"./ProgressBar-BZO70kmk.js";import"./Rating-CzHquKAT.js";import"./Skeleton-DpeTzzxW.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),He={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
