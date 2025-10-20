import{j as e,r as q}from"./iframe-CwuqIU3i.js";import{A as O}from"./ActionGroup-K4almCLG.js";import{B as m}from"./Button-BqbqUci_.js";import{L as n}from"./Label-B0BiyK3O.js";import{S as V}from"./Section-LUqPWyIZ.js";import{T as t}from"./TextField-Bjr-9gsN.js";import{a as h,u,F as p,t as v}from"./Form-C_LQ2LWw.js";import{s as x}from"./Action-Dz8VIf0X.js";import{F as C}from"./useFieldComponent-eP2W8yne.js";import"./index-Cun1SEai.js";import"./dynamic-DTSFzVL0.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./clsx-B-dksMZM.js";import"./index-DdRMNQVP.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./useStatic-DLE3zC_Y.js";import"./IconWarning-DfuZN-Hc.js";import"./Text-Dbs8GmZM.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./utils-BNUN6Z86.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BU9M0i_t.js";import"./Dialog-BB45Hyg5.js";import"./RSPContexts-BJREWOlr.js";import"./OverlayArrow-DPamNpoY.js";import"./useControlledState-B3_Egg2G.js";import"./Collection-YYfkw6ZM.js";import"./CollectionBuilder-BkgyTACG.js";import"./SelectionIndicator-pORsGxIs.js";import"./Separator-OZJOm_uc.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";import"./TextFieldBase-Sy7zspWU.js";import"./FieldDescription-CJ9p1yOe.js";import"./TextField-DH4M0LGG.js";import"./Form-C1wZYKgN.js";import"./Group-OczM-V_0.js";import"./Input-Cwt17kbg.js";import"./useTextField-tXwlexz2.js";import"./useFormReset-BLDFw02N.js";import"./useFormValidation-DK6PIssV.js";import"./ReactAriaControlledValueFix-D3IvEHi3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-B1E32d2Q.js";import"./react-children-utilities-BfKePjVo.js";import"./ClearPropsContext-DGTEyAkG.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,w=_("submit"),Ke={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async s=>{await x(1500),w(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),i=v();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(V,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(O,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const o=s=>{w(s)},r=u({defaultValues:{name:""}}),i=v();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(V,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(O,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},d={render:()=>{const o=u();return q.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(C,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:o=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{...o,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var F,f,j;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var b,S,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
