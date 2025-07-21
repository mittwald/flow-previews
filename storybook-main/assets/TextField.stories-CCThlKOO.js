import{j as e}from"./iframe-tng_7MnI.js";import{A as j}from"./ActionGroup-DTyTHkNS.js";import{B as p}from"./Button-DU_QW8Rd.js";import{L as o}from"./Label-Dv5kr7I4.js";import{S as f}from"./Section-DwdxfWO6.js";import{T as m}from"./TextField-B3qtAxXD.js";import{a as N,u as b,F,t as S}from"./Form-DslsN0O-.js";import{s as O}from"./Action-DpGM30Ow.js";import"./PropsContextProvider-DYtDUrj3.js";import"./mergeRefs--BPoweoc.js";import"./index-Drzl8fEc.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-jEh-tcyT.js";import"./useStatic-Vj9I4teO.js";import"./IconWarning-BPmu7WCe.js";import"./Text-D_jDO6uI.js";import"./browser-zPD-OImI.js";import"./EmulatedBoldText-d-Lx_bwT.js";import"./Text-CW9rRGi5.js";import"./utils-5hQd1GPy.js";import"./LoadingSpinner-DVPPG5kf.js";import"./useLocalizedStringFormatter-CgARc_YB.js";import"./context-DF7MMgfI.js";import"./Button-BAFArKRX.js";import"./ProgressBar-BKGN512w.js";import"./Label-CUv_itT5.js";import"./Hidden-DtL8MOne.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Xo2bW3MF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-GMQejvE6.js";import"./useFocus-DB2yX2jm.js";import"./useFocusRing-DhOBCV_L.js";import"./useFocusable-DouN-Cym.js";import"./ContextMenuSection-Dqcd1OLC.js";import"./Dialog-IOGvswXh.js";import"./RSPContexts-B53Ismbm.js";import"./OverlayArrow-D1J4V4Xu.js";import"./useControlledState-BUDKzFUA.js";import"./Collection-U6iOHpYg.js";import"./CollectionBuilder-Bvhqn8Ns.js";import"./Separator-mXU6o4ZK.js";import"./Input-X3v1cPFB.js";import"./SearchField-BOUVMF0K.js";import"./FieldError-DYaGdwvi.js";import"./Form-DwsjCjtf.js";import"./Group-7jupwvb6.js";import"./useTextField--Fxttb5L.js";import"./useFormReset-xJzqPhqW.js";import"./TextField-iYZH2OXM.js";import"./SelectionManager-Ci6gTmLN.js";import"./useEvent-CP-X5b9K.js";import"./useCollator-B2nuGa8V.js";import"./FocusScope-DGiBHAPP.js";import"./VisuallyHidden-_vEXP6Y8.js";import"./TextFieldBase-C9WYIGvY.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DfzpSzZW.js";import"./FieldDescription-D_eJZryM.js";import"./ReactAriaControlledValueFix-BXQiwHMq.js";import"./context-t97AZKNB.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),Be={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await O(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const De=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,De as __namedExportsOrder,Be as default};
