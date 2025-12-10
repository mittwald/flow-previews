import{j as e,r as E}from"./iframe-Ctq1zpNY.js";import{A as j}from"./ActionGroup-CARzfJtb.js";import{B as f}from"./Button-DNyG1kJP.js";import{L as t}from"./Label-CT-9atCO.js";import{S as b,s as p}from"./Section-D2jBz3SO.js";import{T as n,g as B}from"./TimeField-DpNFufVp.js";import{b as h,u,F as c,t as S}from"./Form-C84o_xHk.js";import{R as x,S as F}from"./ResetButton-Tsnsh9NB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BfX5vXPY.js";import"./PropsContextProvider-BoUiLDJD.js";import"./mergeRefs-B0cZ0A1R.js";import"./index-CTRuU27q.js";import"./clsx-B-dksMZM.js";import"./IconWarning-UjLKXv7l.js";import"./remote-0oz4JQoy.js";import"./Text-BfSoULNy.js";import"./browser-D7Nrk8GS.js";import"./utils-BnoqN3lQ.js";import"./EmulatedBoldText-DAcbt9PZ.js";import"./LoadingSpinner-Daveedqv.js";import"./Button-CDyTi84i.js";import"./ProgressBar-Bxh0Ye9X.js";import"./Hidden-DCaHa4pK.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BUbxt6aY.js";import"./useFocusRing-CS37ztg9.js";import"./useFocusable-wHVwTxSo.js";import"./useLocalizedStringFormatter-Ca1VgSxY.js";import"./context-C8D6suKc.js";import"./RSPContexts-DHJyFFU0.js";import"./Collection-Cmcp_j_K.js";import"./CollectionBuilder-6JKqc06M.js";import"./SelectionIndicator-BUhvtPLn.js";import"./Separator-DoPI3Rcg.js";import"./useStatic-BZ5oCv4Q.js";import"./Accordion-BlmA1-vk.js";import"./Alert-197Nc-vU.js";import"./AlertIcon-D5hQ6U-3.js";import"./AlertBadge-BEYUMP2v.js";import"./Align-CDoIACkY.js";import"./Popover-BOF7jNb2.js";import"./OverlayTrigger-CsCUjwyJ.js";import"./TableFooterRow-CA0OY6Ij.js";import"./SkeletonText-ZOgXAPP6.js";import"./Avatar-DCHePwE0.js";import"./AvatarStack-CgDyXG0P.js";import"./Badge-CP-oLjib.js";import"./BigNumber-DYHcOH-J.js";import"./Breadcrumb-1b5V4Dif.js";import"./Link-BTf1B7UH.js";import"./Heading-CoaPK5Bd.js";import"./Legend-DvSzQrMJ.js";import"./FileCardList-CBpBQcHx.js";import"./Image-DXaLhdwB.js";import"./Color-BBsiMDPd.js";import"./Content-CnMobkgI.js";import"./ContextualHelpTrigger-BSZNnUoZ.js";import"./CounterBadge-tJHLELVH.js";import"./DonutChart-D6V2PmVt.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-AUFqOAj4.js";import"./Header-16boNNDy.js";import"./Initials-BpI7DWhz.js";import"./InlineCode-C00u1vDr.js";import"./PopoverTrigger-DiryRmSf.js";import"./Separator-D_c6JRK_.js";import"./Message-CzMhkybn.js";import"./MessageSeparator-VEfMPvYr.js";import"./NavigationGroup-B0Bocd3L.js";import"./Notification-B7Llmu8M.js";import"./NotificationProvider-DSXavLVT.js";import"./ProgressBar-CNRtmkEG.js";import"./Rating-Cm4XTZ6E.js";import"./Skeleton-DUjtquuF.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Je={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
