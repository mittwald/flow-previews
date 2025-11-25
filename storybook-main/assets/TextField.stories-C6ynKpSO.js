import{j as e,r as E}from"./iframe-HHJxrKwA.js";import{A as j}from"./ActionGroup-BwzLbpYf.js";import{B as f}from"./Button-CMFIu-2V.js";import{L as t}from"./Label-Cd3K2WO5.js";import{S as b,s as p}from"./Section-Byk_fwnD.js";import{T as n,F as B}from"./Modal-T9ideOdw.js";import{c as h,u,F as c,t as S}from"./Form-DjHkdKgP.js";import{R as x,S as F}from"./ResetButton-T-tTjIbD.js";import"./index-nuYtCEEu.js";import"./dynamic-C72LaG0o.js";import"./flowComponent-xvY9fOVo.js";import"./index-kZYQ5p_C.js";import"./clsx-B-dksMZM.js";import"./index-DaaiETUi.js";import"./IconWarning-wsvw38Iz.js";import"./Text-DpCjRkNG.js";import"./browser-B_OFrHH8.js";import"./utils-CqW00CMD.js";import"./EmulatedBoldText-voWdu8Zi.js";import"./LoadingSpinner-CeGC15LV.js";import"./Button-CpujMQDr.js";import"./ProgressBar-BFgUsHfp.js";import"./Hidden-BU2s8wDC.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BPRr7l02.js";import"./useFocusRing-Cv3jUmeb.js";import"./useFocusable-BvYt2clO.js";import"./useLocalizedStringFormatter-DYYCi_Wo.js";import"./context-BVuVVWhQ.js";import"./RSPContexts-CI2I3CcO.js";import"./Collection-AoD9PaOI.js";import"./CollectionBuilder-BljvGYLf.js";import"./SelectionIndicator-CSgFHR1s.js";import"./Separator-Dggcol34.js";import"./useStatic-DrdWJfEu.js";import"./FileCardList-D5TI9EMK.js";import"./Avatar-BL-u7Rdm.js";import"./AlertIcon-BGK-JIKH.js";import"./Image-BVGsM23c.js";import"./Link-DCbgeGNX.js";import"./ControlledNotification-KlNAuKxq.js";import"./Flex-C7vv3uag.js";import"./Accordion-BZ3ouy-_.js";import"./Alert-CwwRXMkc.js";import"./AlertBadge-D0eRjTre.js";import"./Align-B2oqC2QR.js";import"./AvatarStack-B6bz7kAB.js";import"./BigNumber-C7pZ7_lj.js";import"./Breadcrumb-DXXDE0Ik.js";import"./Heading-DYmofqbD.js";import"./Legend-B9dFpFZY.js";import"./Color-gAx7Pts-.js";import"./TableFooterRow-CEbqxy8h.js";import"./SkeletonText-PAxx1wq8.js";import"./Content-Dgn2c9yW.js";import"./CounterBadge-C_LNAor4.js";import"./DonutChart-CF4XtXhZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BA7YQChN.js";import"./Header-CYWloTaj.js";import"./Initials-BTKA_iJE.js";import"./InlineCode-37DSuu8y.js";import"./LayoutCard-DsQ2Pyni.js";import"./Separator-CMOVKCX6.js";import"./MessageSeparator-DnifOB9g.js";import"./NavigationGroup-CktbrD9Y.js";import"./Notification-Bu7C660S.js";import"./NotificationProvider-BH1LT37R.js";import"./ProgressBar-DiXmMAYK.js";import"./Rating-B5eof2ex.js";import"./Skeleton-CPNzswlC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
