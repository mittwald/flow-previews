import{j as e,r as E}from"./iframe-jfiAx13E.js";import{A as j}from"./ActionGroup-Dcl4jstL.js";import{B as f}from"./Button-0JA4DlHg.js";import{L as t}from"./Label-D_WQO2Cw.js";import{S as b,s as p}from"./Section-Cq5txI6z.js";import{T as n,F as B}from"./Modal-CX66kXkE.js";import{c as h,u,F as c,t as S}from"./Form-CjWceNCH.js";import{R as x,S as F}from"./ResetButton-3YYKNAhz.js";import"./index-nuYtCEEu.js";import"./dynamic-spzJk2X2.js";import"./flowComponent-CGAmEMtP.js";import"./index-DveU93s7.js";import"./clsx-B-dksMZM.js";import"./index-nYZuwJQK.js";import"./IconWarning-CLlhNyNw.js";import"./Text-DMCt93av.js";import"./browser-Cf72YD6u.js";import"./utils-CFoUdj0t.js";import"./EmulatedBoldText-FBIs6RkZ.js";import"./LoadingSpinner-CJ4P62eK.js";import"./Button-DYW2V96T.js";import"./ProgressBar-DTac6yq1.js";import"./Hidden-BolQ_iVE.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dt1an7Oo.js";import"./useFocusRing-DSWloUds.js";import"./useFocusable-C36BBZPx.js";import"./useLocalizedStringFormatter-11Mex28w.js";import"./context-DFW5cDY1.js";import"./RSPContexts-DlUgI_bO.js";import"./Collection-CucMCaxz.js";import"./CollectionBuilder-BCsWiDMP.js";import"./SelectionIndicator-C0hj0suB.js";import"./Separator-DMHVCuKL.js";import"./useStatic-CVt4f_3L.js";import"./FileCardList-CAO-eKhF.js";import"./Avatar-BPXSWiS2.js";import"./AlertIcon-jVfRkC0n.js";import"./Image-47p4BbHq.js";import"./Link-DdfarbSL.js";import"./ControlledNotification-BWwueiDS.js";import"./Flex-JpE5a0we.js";import"./Accordion-BYK3oF2m.js";import"./Alert-DCnUsegh.js";import"./AlertBadge-D_y3r1rE.js";import"./Align-mqpDKLXq.js";import"./AvatarStack-gXbUfOK9.js";import"./BigNumber-CwI26k0c.js";import"./Breadcrumb-CGMeHl1X.js";import"./Heading-CWWH-j0T.js";import"./Legend-BZvuS00K.js";import"./Color-d-NFCGEW.js";import"./TableFooterRow-DFjgJNI2.js";import"./SkeletonText-CfOW8xE6.js";import"./Content-Bomgcrt_.js";import"./CounterBadge-D5P2daU3.js";import"./DonutChart-_pq3fqGA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8tDB-OR.js";import"./Header-DTInGxSd.js";import"./Initials-CiDdSpYl.js";import"./InlineCode-DlpJG5Xb.js";import"./LayoutCard-Cw6bppbD.js";import"./Separator-ChJOjxdw.js";import"./MessageSeparator-uN66Afyw.js";import"./NavigationGroup-DlhGJFiH.js";import"./Notification-CrpH1NXe.js";import"./NotificationProvider-BXIWqn_y.js";import"./ProgressBar-zmyacfUR.js";import"./Rating-BFtwlB2F.js";import"./Skeleton-DFqhkJii.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ge=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ge as __namedExportsOrder,Ue as default};
