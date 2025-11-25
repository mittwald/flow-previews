import{j as e,r as g}from"./iframe-CVdzphmp.js";import{A as j}from"./ActionGroup-CWQpjp5Z.js";import{B as c}from"./Button-Cy2rd34B.js";import{L as n}from"./Label-BcwsyfCE.js";import{S as b,s as h}from"./Section-DtrIGiG-.js";import{T as i,F as B}from"./Modal-dLKFywtU.js";import{b as F,u as d,F as u,t as S}from"./Form-GraeHhDs.js";import{R as f,S as x}from"./ResetButton-BC5ETspy.js";import"./index-nuYtCEEu.js";import"./dynamic-D15r1Yxg.js";import"./flowComponent-CzVecZL_.js";import"./index-DhI8Ssxe.js";import"./clsx-B-dksMZM.js";import"./index-XbyfyjmF.js";import"./IconWarning-Dqi9ABql.js";import"./Text-Bkok2Uad.js";import"./browser-NAvxjlqe.js";import"./utils-CFM6TLUG.js";import"./EmulatedBoldText-Buf1io-r.js";import"./LoadingSpinner-DTzlaVu1.js";import"./Button-CTZeRvkz.js";import"./ProgressBar-1X1fHZT0.js";import"./Hidden-Dt0LCI07.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BRBaLiQc.js";import"./useFocusRing-BvvALaA3.js";import"./useFocusable-By55uwCe.js";import"./useLocalizedStringFormatter-DSC0kUTs.js";import"./context-B-mwp0vS.js";import"./RSPContexts-DDuv6DrT.js";import"./Collection-D1raa_37.js";import"./CollectionBuilder-D0Q13mlX.js";import"./SelectionIndicator-wxrHnCmJ.js";import"./Separator-DMedQabI.js";import"./useStatic-CTNvYRV_.js";import"./FileCardList-CelLg_wh.js";import"./Avatar-5by9MeQI.js";import"./AlertIcon-Xp4f2JBr.js";import"./Image-C129SSb1.js";import"./Link-DafBlrAX.js";import"./ControlledNotification-Cxvk1MBM.js";import"./Flex-CXweaQA0.js";import"./Accordion-CII8tjDR.js";import"./Alert-CxRF3ICH.js";import"./AlertBadge-g5AIFmAM.js";import"./Align-D1ekpy-F.js";import"./AvatarStack-gtLPvBlC.js";import"./BigNumber-DDAMaBcj.js";import"./Breadcrumb-D6jlLVdK.js";import"./Heading-DzvfYRfV.js";import"./Legend-Ch6lQmnj.js";import"./Color-bOvY6mSn.js";import"./TableFooterRow-BNbzk5NJ.js";import"./SkeletonText-CyW34AgL.js";import"./Content-DxRrX9zb.js";import"./CounterBadge-CKtsFS1H.js";import"./DonutChart-BqUMdaQw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Y2YDUvsA.js";import"./Header-cd3ubJu7.js";import"./Initials-8P49ASMZ.js";import"./InlineCode-ClEEVqRB.js";import"./LayoutCard-DFxi45F0.js";import"./Separator-BfdYcmQH.js";import"./MessageSeparator-CuotSqOA.js";import"./NavigationGroup-CEF9lIWg.js";import"./Notification-3G2vZj4A.js";import"./NotificationProvider-BuTudFPl.js";import"./ProgressBar-Cb_NqQgZ.js";import"./Rating-D1vk6HX_.js";import"./Skeleton-DCmfrDd3.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:F,render:()=>{const t=async o=>{await h(1500),E(o)},r=d({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"nameDefaultValue",children:e.jsx(i,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(c,{onPress:()=>r.setValue("nameDefaultValue","horst"),children:"Set"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:()=>{const t=o=>{E(o)},r=d({defaultValues:{name:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"name",children:e.jsx(i,{value:r.watch("name"),onChange:o=>{r.setValue("name",o.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},a={render:()=>{const t=d();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(i,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},l={render:t=>{const r=d();return e.jsxs(u,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{...t,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(c,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(c,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
