import{j as e,r as q}from"./iframe-hiH37hms.js";import{A as O}from"./ActionGroup-CmCahmkF.js";import{B as m}from"./Button-BrzTi3gr.js";import{L as n}from"./Label-DzM9UWDP.js";import{S as V}from"./Section-B8yRiADO.js";import{T as t}from"./TextField-HM18a4WD.js";import{a as h,u,F as p,t as v}from"./Form-Dyo8yiYK.js";import{s as x}from"./Action-BsGu1LRs.js";import{F as C}from"./FieldError-BChewV0h.js";import"./index-Cun1SEai.js";import"./dynamic-BmCJXizF.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./clsx-B-dksMZM.js";import"./index-BJu77HCL.js";import"./getActionGroupSlot-BVQ8sE7Q.js";import"./useStatic-8hqO5zoY.js";import"./IconWarning-Cse0Xf0Q.js";import"./Text-CsOmTVyE.js";import"./browser-BuBe5AKm.js";import"./EmulatedBoldText-BNkr3bPM.js";import"./Text-UKwjxOKq.js";import"./utils-JHWv327y.js";import"./LoadingSpinner-DMdJqtIF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./context-DRH00eGt.js";import"./Button-BSe0nnji.js";import"./ProgressBar-CDjSE3x2.js";import"./Label-C0jnYKOc.js";import"./Hidden-XcASwwlw.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhsWghka.js";import"./useFocus-B9-o-MIg.js";import"./useFocusRing-WUR2BD9e.js";import"./useFocusable-C2_7lwWJ.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Co8KQTmA.js";import"./Dialog-i0N_hzHI.js";import"./RSPContexts-DTJHlpNa.js";import"./OverlayArrow-CEJUr9iX.js";import"./useControlledState-BFPCb-Qt.js";import"./Collection-BgRsBBN2.js";import"./CollectionBuilder-DEp0jGGn.js";import"./context-BuwG6neX.js";import"./Separator-DghpaL2h.js";import"./SelectionManager-CSTWFJsn.js";import"./useEvent-CS-uDTBx.js";import"./useCollator-5PyA7SnE.js";import"./FocusScope-C5smDGs3.js";import"./VisuallyHidden-C5VBpvXq.js";import"./TextFieldBase-BJaai17v.js";import"./FieldDescription-CK5IXO12.js";import"./TextField-BxAS6IXD.js";import"./FormField.module-CapR5K3V.js";import"./Form-stGXRgys.js";import"./Group-BAo_3ehk.js";import"./Input-DYBCaGaK.js";import"./useTextField-Gz5Lvra1.js";import"./useFormReset-BDeOlo8n.js";import"./useFormValidation-DybUzXH7.js";import"./ReactAriaControlledValueFix-BfvPjJZR.js";import"./useFieldComponent-CPFfLOL8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-riC63IcS.js";import"./react-children-utilities-CYBZOoJV.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,w=_("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async s=>{await x(1500),w(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),i=v();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(V,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(O,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const o=s=>{w(s)},r=u({defaultValues:{name:""}}),i=v();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(V,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(O,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},d={render:()=>{const o=u();return q.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(C,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:o=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{...o,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var F,f,j;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var b,S,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
            <Button type="submit">Submit</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var y,E,L;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var T,B,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const ze=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{a as Default,d as WithFieldError,c as WithFocus,l as WithTransformedValue,ze as __namedExportsOrder,Ye as default};
