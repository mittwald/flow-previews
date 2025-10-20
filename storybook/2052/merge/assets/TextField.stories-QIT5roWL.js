import{j as e,r as q}from"./iframe-CuPb25cv.js";import{A as O}from"./ActionGroup-BCzfYI9o.js";import{B as m}from"./Button-Cy_FSVpl.js";import{L as n}from"./Label-BZpLTozc.js";import{S as V}from"./Section-B55_57D7.js";import{T as t}from"./TextField-CEKhlDpO.js";import{a as h,u,F as p,t as v}from"./Form-D3dPEjiA.js";import{s as x}from"./Action-CE7P3CGA.js";import{F as C}from"./useFieldComponent-D7Smil9s.js";import"./index-Cun1SEai.js";import"./dynamic-CGQ0FoZ_.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./clsx-B-dksMZM.js";import"./index-DkEiVX-f.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./useStatic-BfPJwRSw.js";import"./IconWarning-CLSl9yKt.js";import"./Text-2_ekHeae.js";import"./browser-1QXSrBs6.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Text-DqFBqxgU.js";import"./utils-rjde634_.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./context-Cf_eXnNJ.js";import"./Button-DVhMN4v1.js";import"./ProgressBar-CiugOVQS.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpP9sX_8.js";import"./useFocus-Cts5O1ED.js";import"./useFocusRing-rCVkEzcT.js";import"./useFocusable-CMpHMgWZ.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-D_Ue6SpG.js";import"./Dialog-CfTpgVgc.js";import"./RSPContexts-xO1N3or9.js";import"./OverlayArrow-iWeFoukr.js";import"./useControlledState-zpPREGnC.js";import"./Collection-CNWEIWZq.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./SelectionIndicator-H-x2PvD-.js";import"./Separator-DV0TabKR.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";import"./TextFieldBase-Cpr2rxOi.js";import"./FieldDescription-C0wUj9vw.js";import"./TextField-D8WUfi5z.js";import"./Form-BCVzxl1k.js";import"./Group-CwH8Xmuc.js";import"./Input-DxrKJDZ_.js";import"./useTextField-459gVrKP.js";import"./useFormReset-Cj0hiSlt.js";import"./useFormValidation-DUD5vlRz.js";import"./ReactAriaControlledValueFix-DRH_PgL6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-B692btnM.js";import"./react-children-utilities-OY5o0O78.js";import"./ClearPropsContext-1rzIpp4D.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,w=_("submit"),Ke={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async s=>{await x(1500),w(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),i=v();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(V,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(O,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const o=s=>{w(s)},r=u({defaultValues:{name:""}}),i=v();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(V,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(O,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},d={render:()=>{const o=u();return q.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(C,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:o=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{...o,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var F,f,j;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var b,S,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const Ye=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{a as Default,d as WithFieldError,c as WithFocus,l as WithTransformedValue,Ye as __namedExportsOrder,Ke as default};
