import{j as e,r as E}from"./iframe-BZ309vyP.js";import{A as j}from"./ActionGroup-DcCFpoHe.js";import{B as f}from"./Button-D_IowAzf.js";import{L as t}from"./Label-DaB9u04W.js";import{S as b,s as p}from"./Section-8HxUyc4l.js";import{T as n,g as B}from"./TimeField-XG7fVuks.js";import{b as h,u,F as c,t as S}from"./Form-B3YyVIIh.js";import{R as x,S as F}from"./ResetButton-DiyKUpBb.js";import"./index-nuYtCEEu.js";import"./dynamic-BlbD8p9A.js";import"./PropsContextProvider-P_wGPXL3.js";import"./mergeRefs-DOKtgXIl.js";import"./index-D_qUUaJn.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DvQ_83sT.js";import"./Text-C4LG1QU9.js";import"./browser-6QOIIU7n.js";import"./utils-JyFk5TTa.js";import"./EmulatedBoldText-BN5KbGVs.js";import"./LoadingSpinner-CP4vAouS.js";import"./Button-CF0FSAUf.js";import"./ProgressBar-BUFkxRcJ.js";import"./Hidden-Dy-Kvk-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B2ssQm4M.js";import"./useFocusRing-BtfZpnq2.js";import"./useFocusable-CnzH4q2c.js";import"./useLocalizedStringFormatter-D2Npicej.js";import"./context-DqVMPo4j.js";import"./RSPContexts-CvJVTBp5.js";import"./Collection-Jfb5Oz2B.js";import"./CollectionBuilder-BxUVDWC-.js";import"./SelectionIndicator-B3TjwCoM.js";import"./Separator-Dgou7g2f.js";import"./useStatic-5dWEA-L1.js";import"./Accordion-DBJYoG6f.js";import"./Alert-DPsJkmhp.js";import"./AlertIcon-B-mY0RH1.js";import"./AlertBadge-R-mVKmEC.js";import"./Align-DS4_04QJ.js";import"./Popover-X1T8rxjL.js";import"./OverlayTrigger-D_yTwUd7.js";import"./TableFooterRow-CiOqHLtA.js";import"./SkeletonText-DFDkwTxU.js";import"./Avatar-B3lmaioZ.js";import"./AvatarStack-BG3RCwzr.js";import"./Badge--3MWN732.js";import"./BigNumber-BkKE9hXG.js";import"./Breadcrumb-B7PRg9RF.js";import"./Link-m-wa_u5M.js";import"./Heading-BsbQC_AI.js";import"./Legend-C53VbU31.js";import"./FileCardList-Uss-bJOP.js";import"./Image-K3vcbe26.js";import"./Color-DAFsRmWC.js";import"./Content-BkJWB-QG.js";import"./ContextualHelpTrigger-CvFvqIHG.js";import"./CounterBadge-FgsOg61J.js";import"./DonutChart-Cgkf9wPz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DQqFYPly.js";import"./Header-_hwWlC9P.js";import"./Initials-CtNkodNC.js";import"./InlineCode-Dinyx0TJ.js";import"./PopoverTrigger-fvbDiyfk.js";import"./Separator-n_z7rKib.js";import"./Message-D2YQcln4.js";import"./MessageSeparator-DajKPYBq.js";import"./NavigationGroup-DO1RxFBf.js";import"./Notification-B0QimcaP.js";import"./NotificationProvider-CEg6afiq.js";import"./ProgressBar-DGfkaPcD.js";import"./Rating-BTXRmieV.js";import"./Skeleton-WCVj9B_-.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),He={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
