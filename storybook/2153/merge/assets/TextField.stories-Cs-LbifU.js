import{j as e,r as g}from"./iframe-CN4WTwYv.js";import{A as j}from"./ActionGroup-DyQk2EE1.js";import{B as c}from"./Button-DKV_rJZ0.js";import{L as n}from"./Label-BRmwvfXT.js";import{S as b,s as h}from"./Section-ChtzXzqR.js";import{T as i,F as B}from"./Modal-JtS1GCqs.js";import{b as F,u as d,F as u,t as S}from"./Form-C5WmNT0c.js";import{R as f,S as x}from"./ResetButton-6fmp_2Jb.js";import"./index-nuYtCEEu.js";import"./dynamic-B0RnxgZh.js";import"./flowComponent-DKJqWTmA.js";import"./index-BzOdNhte.js";import"./clsx-B-dksMZM.js";import"./index-NeY_xEz-.js";import"./IconWarning-OOGKEFPc.js";import"./Text-CuaHEgKJ.js";import"./browser-CybO_GX9.js";import"./utils-dijpHYHY.js";import"./EmulatedBoldText-D_eW2liq.js";import"./LoadingSpinner-pxkgsSpr.js";import"./Button-ABhPpFMV.js";import"./ProgressBar-BPzw3REr.js";import"./Hidden-BZs9FL3y.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-WZFoFUL5.js";import"./useFocusRing-BwoDdEBQ.js";import"./useFocusable-CuBMSLKI.js";import"./useLocalizedStringFormatter-CTHVjSGk.js";import"./context-D5Q2rEdS.js";import"./RSPContexts-qFT5nqOw.js";import"./Collection-_B8J5S67.js";import"./CollectionBuilder-BScyvG_s.js";import"./SelectionIndicator-BD_RUCQf.js";import"./Separator-HWaNsUvC.js";import"./useStatic-B_XtSJ-Q.js";import"./FileCardList-B7y733ft.js";import"./Avatar-DUVggXrd.js";import"./AlertIcon-CK_ZHrhI.js";import"./Image-sLmDF6h6.js";import"./Link-BWI3Ij3P.js";import"./ControlledNotification-B4SeTnx9.js";import"./Flex-CdYYO_HZ.js";import"./Accordion-DTfzyVKJ.js";import"./Alert-D1kyjDat.js";import"./AlertBadge-vMsaaONk.js";import"./Align-CuYESgtx.js";import"./AvatarStack-DqNBCzbY.js";import"./BigNumber-Cmue7ZKp.js";import"./Breadcrumb-DD6fnOqx.js";import"./Heading-BxJhHPjy.js";import"./Legend-CvwACQxn.js";import"./Color-UdZqV4-Q.js";import"./TableFooterRow-CtEJIn2Q.js";import"./SkeletonText-CEwNi-L-.js";import"./Content-Bb2nt3RH.js";import"./CounterBadge-DqyLtEIg.js";import"./DonutChart-BRPZRgK_.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-e6fNnZwM.js";import"./Header-BVqKPdhQ.js";import"./Initials-C__jbqKP.js";import"./InlineCode-BLOKlvTP.js";import"./LayoutCard-BjkzdleE.js";import"./Separator-altoXYC_.js";import"./MessageSeparator-DzKM339D.js";import"./NavigationGroup-Ry0FrTf6.js";import"./Notification-CJdFBvUm.js";import"./NotificationProvider-CD_MO59g.js";import"./ProgressBar-ktu-Gi_7.js";import"./Rating-c-hlPqMh.js";import"./Skeleton-D5vx8POd.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:F,render:()=>{const t=async o=>{await h(1500),E(o)},r=d({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"nameDefaultValue",children:e.jsx(i,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(c,{onPress:()=>r.setValue("nameDefaultValue","horst"),children:"Set"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:()=>{const t=o=>{E(o)},r=d({defaultValues:{name:""}}),p=S();return e.jsx(u,{form:r,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(p,{name:"name",children:e.jsx(i,{value:r.watch("name"),onChange:o=>{r.setValue("name",o.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},a={render:()=>{const t=d();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(i,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},l={render:t=>{const r=d();return e.jsxs(u,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(F,{name:"field",children:e.jsx(i,{...t,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(c,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(c,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(f,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
