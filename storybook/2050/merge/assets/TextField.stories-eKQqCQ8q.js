import{j as e}from"./iframe-DRU2mvvl.js";import{A as y}from"./ActionGroup-D1ho32W2.js";import{B as m}from"./Button-B0nESNPa.js";import{L as n}from"./Label-BMa7ap8T.js";import{S as B}from"./Section-BqGqHoUM.js";import{T as o}from"./TextField-CaXn-uuY.js";import{a as L,u,F as c,t as N}from"./Form-DXkXYe5Y.js";import{s as V}from"./Action-DTfm05Ga.js";import"./index-Cun1SEai.js";import"./dynamic-BlISIwZy.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./clsx-B-dksMZM.js";import"./index-BV-9eFwZ.js";import"./getActionGroupSlot-DvwtoTC6.js";import"./useStatic-ZRFoobPh.js";import"./IconWarning-Ns7aLDcg.js";import"./Text-CEDtxg_Y.js";import"./browser-DycDZ9Cy.js";import"./EmulatedBoldText-B-n-Sp9M.js";import"./Text-Qj1KdidL.js";import"./utils-CFpcVBbf.js";import"./LoadingSpinner-Bxg5W_a4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./context-WCWlHgyn.js";import"./Button-DFs_j9qJ.js";import"./ProgressBar-CO2F47bQ.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqWNUUeu.js";import"./useFocus-WX08leiR.js";import"./useFocusRing-Dvcn05WP.js";import"./useFocusable-Bm6appxO.js";import"./ContextMenuSection-S05W1Jlf.js";import"./Dialog-2Ji50Dgm.js";import"./RSPContexts-uOHI89tH.js";import"./OverlayArrow-BamfX0ZV.js";import"./useControlledState-B4CekZuY.js";import"./Collection-sMc3txMy.js";import"./CollectionBuilder-Dd2Gplrf.js";import"./context-ZJx-WxTz.js";import"./Separator-D99CVDQv.js";import"./SelectionManager-BnRrB_cT.js";import"./useEvent-2v3ak77A.js";import"./useCollator-pfKZSWNa.js";import"./FocusScope-XgH7ylXa.js";import"./VisuallyHidden-D2z1OxrB.js";import"./TextFieldBase-Djl98XLc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DvrKLXyD.js";import"./FieldError-C8YHk-IR.js";import"./FieldDescription-DM9XG9SC.js";import"./TextField-CIr7bTxf.js";import"./Form-BR3m4Qab.js";import"./Group-C-0gJbtA.js";import"./Input-Hz2jOfAo.js";import"./useTextField-DxM40D_X.js";import"./useFormReset-BYiU13z5.js";import"./useFormValidation-BPBMmZYe.js";import"./ReactAriaControlledValueFix-BIonxPfd.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-BmZA5kUX.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:L,render:()=>{const i=async s=>{await V(1500),T(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(y,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const i=s=>{T(s)},r=u({defaultValues:{name:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(y,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},p={render:i=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await V(2e3),children:[e.jsx(L,{name:"email",children:e.jsx(o,{...i,type:"email",inputMode:"email",children:e.jsx(n,{children:"Email"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("email"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var d,h,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var b,S,g;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"email"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Email</Label>
          </TextField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("email", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("email")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(g=(S=p.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const We=["Default","WithTransformedValue","WithFocusAndError"];export{a as Default,p as WithFocusAndError,l as WithTransformedValue,We as __namedExportsOrder,Ue as default};
