import{j as e,r as S}from"./iframe-C9dYfgSf.js";import{A as F}from"./ActionGroup-DjfN3Zb7.js";import{B as m}from"./Button-RNpKkVK8.js";import{L as n}from"./Label-huPJyomh.js";import{S as f}from"./Section-DQdw2BcZ.js";import{T as t}from"./TextField-Cs7HQCNw.js";import{a as h,u,F as p,t as j}from"./Form-BmEbV8bf.js";import{s as x}from"./Action-BrSPa5cY.js";import{F as g}from"./useFieldComponent-Br5YSvi-.js";import"./index-nuYtCEEu.js";import"./dynamic-4HLWwwwW.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./clsx-B-dksMZM.js";import"./index-DbMX5jmM.js";import"./getActionGroupSlot-CRNg2W87.js";import"./useStatic-BaiCJrRH.js";import"./IconWarning-fVXPK3i1.js";import"./Text-DeJ4PaiG.js";import"./browser-CNYhznL3.js";import"./EmulatedBoldText-WKOr2IKU.js";import"./Text-CQ7Fwsu6.js";import"./utils-CO6LnGLR.js";import"./LoadingSpinner-DDIQ3dza.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./context-iM_q7ty8.js";import"./Button-CD1zJvoj.js";import"./ProgressBar-BM6quT-y.js";import"./Label-HJzRYjqm.js";import"./Hidden-C5ZQOCSQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DpM9fuaR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlhdQGL7.js";import"./useFocus-xkgg1n29.js";import"./useFocusRing-29NBTIcT.js";import"./useFocusable-U5sjNWcc.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-1UGXIKfR.js";import"./Dialog-W7ChNaVu.js";import"./RSPContexts-BkJpVpLi.js";import"./OverlayArrow-CkkZdON1.js";import"./useControlledState-DlEEU1a1.js";import"./Collection-BLbQf80v.js";import"./CollectionBuilder-tXiCZVVh.js";import"./SelectionIndicator-BcmkxpDt.js";import"./Separator-j1ISyAzV.js";import"./SelectionManager-jzyqiCAr.js";import"./useEvent-D_pA9wfR.js";import"./useCollator-C7M5jLo1.js";import"./FocusScope-BDFIEW4R.js";import"./VisuallyHidden-Ck6pQyeO.js";import"./TextFieldBase-sNCN9Rfp.js";import"./FieldDescription-aE3p3Nfy.js";import"./TextField-Cfjxq2lC.js";import"./Form-CYcFTCJ6.js";import"./Group-DC27XkzE.js";import"./Input-B4cpKRwG.js";import"./useTextField-fnhO15Be.js";import"./useFormReset-CCon2GTP.js";import"./useFormValidation-cSt72451.js";import"./ReactAriaControlledValueFix-1U2pzmCq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-BXzGXLkM.js";import"./react-children-utilities-DAjt5CEG.js";import"./ClearPropsContext-oIIvwL5Y.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Me={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async s=>{await x(1500),b(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(F,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const o=s=>{b(s)},r=u({defaultValues:{name:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},d={render:()=>{const o=u();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:o=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{...o,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Pe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{a as Default,d as WithFieldError,c as WithFocus,l as WithTransformedValue,Pe as __namedExportsOrder,Me as default};
