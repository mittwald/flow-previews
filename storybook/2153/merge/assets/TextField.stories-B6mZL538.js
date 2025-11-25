import{j as e,r as g}from"./iframe-DGpdmZy6.js";import{A as j}from"./ActionGroup-BO_R-HXV.js";import{B as c}from"./Button--Vm3DJA2.js";import{L as n}from"./Label-PpyRVBZT.js";import{S as b,s as h}from"./Section-OXIXjQEc.js";import{T as i,F as B}from"./Modal-k3eojm_4.js";import{b as F,u as d,F as u,t as S}from"./Form-D6ip5OeB.js";import{R as f,S as x}from"./ResetButton-C-ek5KZS.js";import"./index-nuYtCEEu.js";import"./dynamic-DNRDSutR.js";import"./flowComponent-BQEf5M_T.js";import"./index-De-tUa4b.js";import"./clsx-B-dksMZM.js";import"./index-CrYgLF30.js";import"./IconWarning-D9ML-GA0.js";import"./Text-BXzwFxO1.js";import"./browser-B8HytOQQ.js";import"./utils-CfRYmgOV.js";import"./EmulatedBoldText-CnA6n1pz.js";import"./LoadingSpinner-D-s3tm4d.js";import"./Button-CcaaVk2n.js";import"./ProgressBar-BRkbw9Mx.js";import"./Hidden-DBVn3F7o.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-GZA4a4Iz.js";import"./useFocusRing-B3OG5RkS.js";import"./useFocusable-CIlqLEIw.js";import"./useLocalizedStringFormatter-Zkj79Hgs.js";import"./context-BFV2yP4B.js";import"./RSPContexts-C3hd5u3G.js";import"./Collection-vhKnWwMf.js";import"./CollectionBuilder-B9NCAwqd.js";import"./SelectionIndicator-xePv5RSf.js";import"./Separator-F2jO3kT9.js";import"./useStatic-BZw01sJd.js";import"./FileCardList-CKzDrmKJ.js";import"./Avatar-DVvgb2Xm.js";import"./AlertIcon-Bwvtphoy.js";import"./Image-Cn_QWKsO.js";import"./Link-CguFfPfy.js";import"./ControlledNotification-rPJOiTKo.js";import"./Flex-FXUr_mGC.js";import"./Accordion-CLpjyq9Z.js";import"./Alert-DXCJPXtD.js";import"./AlertBadge-BuTdg19f.js";import"./Align-6bfVl_L9.js";import"./AvatarStack-B9hL9-8U.js";import"./BigNumber-BDnXKUew.js";import"./Breadcrumb-DERgwsy8.js";import"./Heading-D9ExrM7H.js";import"./Legend-C45L9tw3.js";import"./Color-CLgKnwGx.js";import"./TableFooterRow-D497U3pl.js";import"./SkeletonText-Ct2YzDKK.js";import"./Content-DYEeGbNd.js";import"./CounterBadge-DkSRGtKd.js";import"./DonutChart-DANJLMjV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BJrTxMO1.js";import"./Header-D_phYTs8.js";import"./Initials-IbErwSCF.js";import"./InlineCode-DttkcdFo.js";import"./LayoutCard-BmKEOMGc.js";import"./Separator-F4fQOqnh.js";import"./MessageSeparator-ZxZNVJUN.js";import"./NavigationGroup-Ci_EZV7N.js";import"./Notification-m02SjDLR.js";import"./NotificationProvider-C2jvC1ES.js";import"./ProgressBar-CeifPY35.js";import"./Rating-DvaCapzL.js";import"./Skeleton-CQJ_ScCC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:F,render:()=>{const t=async o=>{await h(1500),E(o)},r=d({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"nameDefaultValue",children:e.jsx(i,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(c,{onPress:()=>r.setValue("nameDefaultValue","horst"),children:"Set"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:()=>{const t=o=>{E(o)},r=d({defaultValues:{name:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"name",children:e.jsx(i,{value:r.watch("name"),onChange:o=>{r.setValue("name",o.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},a={render:()=>{const t=d();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(i,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},l={render:t=>{const r=d();return e.jsxs(u,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{...t,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(c,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(c,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
