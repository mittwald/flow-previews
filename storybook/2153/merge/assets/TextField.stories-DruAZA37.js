import{j as e,r as g}from"./iframe-C7sy8eLt.js";import{A as j}from"./ActionGroup-Bou60yfQ.js";import{B as c}from"./Button-BZw3q7YG.js";import{L as n}from"./Label-rfHe5hPU.js";import{S as b,s as h}from"./Section-B_6olPV1.js";import{T as i,F as B}from"./Modal-CgkmliK_.js";import{b as F,u as d,F as u,t as S}from"./Form-CEjV-kW2.js";import{R as f,S as x}from"./ResetButton-5Orn1GpQ.js";import"./index-nuYtCEEu.js";import"./dynamic-xNYmGRJM.js";import"./flowComponent-DIjd7Mwu.js";import"./index-Cpqj0oV0.js";import"./clsx-B-dksMZM.js";import"./index-CQGWyvrR.js";import"./IconWarning-BlJBP8EW.js";import"./Text-CNjgj0Nh.js";import"./browser-BbONOrP3.js";import"./utils-ClB0n4MX.js";import"./EmulatedBoldText-D386pHKZ.js";import"./LoadingSpinner-DOZFO_5L.js";import"./Button-Dbk_q6kB.js";import"./ProgressBar-DVj1Bza0.js";import"./Hidden-BiwDbxQo.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CzQbumPb.js";import"./useFocusRing-Ah8T3Rlp.js";import"./useFocusable-BdiuUyMg.js";import"./useLocalizedStringFormatter-CTGu5obF.js";import"./context-cT4ej6gr.js";import"./RSPContexts-BXBNaV8B.js";import"./Collection-Bs_bKP_m.js";import"./CollectionBuilder--gmJ_NYC.js";import"./SelectionIndicator-BYKIsOg-.js";import"./Separator-BY5kq_RL.js";import"./useStatic-C3MBsJUa.js";import"./FileCardList-BcoXYZaJ.js";import"./Avatar-pqiTjDaw.js";import"./AlertIcon-pdEEQLjK.js";import"./Image-BzosvY75.js";import"./Link-CYOMmfe5.js";import"./ControlledNotification-1haiwG2D.js";import"./Flex-Cery0S_5.js";import"./Accordion-CYXfOEtJ.js";import"./Alert-CuOVoIP4.js";import"./AlertBadge-DbgGv4eB.js";import"./Align-BlvYLRO8.js";import"./AvatarStack-CXX7ZouY.js";import"./BigNumber-D9-VIDaq.js";import"./Breadcrumb-B3K0GN86.js";import"./Heading-k3TZmz5u.js";import"./Legend-D0oOrj9r.js";import"./Color-Ds7_816d.js";import"./TableFooterRow-yox3njQ3.js";import"./SkeletonText-oFV3v-ow.js";import"./Content--Il2Vbk0.js";import"./CounterBadge-sYYq6djQ.js";import"./DonutChart-Bw97G3qW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvMkVg-s.js";import"./Header-DwdbIsc5.js";import"./Initials-nwj7pVwk.js";import"./InlineCode-fcdnehc6.js";import"./LayoutCard-YIuI0q1W.js";import"./Separator-CnXIIkpp.js";import"./MessageSeparator-BAFFdBEb.js";import"./NavigationGroup-MvGeIrOF.js";import"./Notification-BKYjv64k.js";import"./NotificationProvider-NTC8P3ww.js";import"./ProgressBar-gRP8sWKC.js";import"./Rating-BnzoQ1_w.js";import"./Skeleton-D46xLN5H.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:F,render:()=>{const t=async o=>{await h(1500),E(o)},r=d({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"nameDefaultValue",children:e.jsx(i,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(c,{onPress:()=>r.setValue("nameDefaultValue","horst"),children:"Set"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:()=>{const t=o=>{E(o)},r=d({defaultValues:{name:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"name",children:e.jsx(i,{value:r.watch("name"),onChange:o=>{r.setValue("name",o.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},a={render:()=>{const t=d();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(i,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},l={render:t=>{const r=d();return e.jsxs(u,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{...t,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(c,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(c,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
