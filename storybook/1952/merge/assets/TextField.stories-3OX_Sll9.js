import{j as e}from"./iframe-Nqcw2rDw.js";import{A as j}from"./ActionGroup-CGJRByNr.js";import{B as p}from"./Button-Cgaohe9-.js";import{L as o}from"./Label-fC6EmrAI.js";import{S as f}from"./Section-BNpqoHYG.js";import{T as n}from"./TextField-BvYUtBt0.js";import{a as N,u as b,F,t as S}from"./Form-BleG95QQ.js";import{s as O}from"./Action-BKSKXcVa.js";import"./PropsContextProvider-ChoPgDKo.js";import"./mergeRefs-DwiHgjVG.js";import"./index-Cq0EiWeo.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-s6DAhujQ.js";import"./useStatic-CP_9Iese.js";import"./IconWarning-B5Ig4VhK.js";import"./Text-xc4JCB-X.js";import"./browser-BgnnD3cg.js";import"./EmulatedBoldText-Cwk1IhrY.js";import"./Text-CIgQjC5i.js";import"./utils-Bp1w5lkv.js";import"./LoadingSpinner-Bp03oye4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-mfo6vHdn.js";import"./context-Btv9vDKp.js";import"./Button-qshs3T0G.js";import"./ProgressBar-Sv3Hk_vO.js";import"./Label-CtCba6z0.js";import"./Hidden-CAJLdDr-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DV1Mt0Tl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLwwvcX7.js";import"./useFocus-C0d_BuOG.js";import"./useFocusRing-CuYhL92s.js";import"./useFocusable-C3WyBOJs.js";import"./ContextMenuSection-BuB4Q9WA.js";import"./Dialog--HSHBiJO.js";import"./RSPContexts-iQSSy6Xo.js";import"./OverlayArrow-Da2mMVHM.js";import"./useControlledState-Cj9ITNGF.js";import"./Collection-Dnpb3Bt1.js";import"./CollectionBuilder-DJE4aqj-.js";import"./Separator-CRfWHhtA.js";import"./Group-8CGiAkDp.js";import"./SearchField-DVNFC-Ik.js";import"./FieldError-BpNobjrx.js";import"./Form-DdlSQ4T5.js";import"./useTextField-B4dlVx9P.js";import"./useFormReset-CuLrpRbL.js";import"./TextField--xsqEd_p.js";import"./useEvent-D-ifiSoO.js";import"./SelectionManager-BU8YZ5iT.js";import"./useCollator-SfrY7Omb.js";import"./FocusScope-BuhXHJsl.js";import"./VisuallyHidden-CR5lrquH.js";import"./TextFieldBase-B7CIl_mw.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CQWwaXuw.js";import"./FieldDescription-CXXfwgnb.js";import"./ReactAriaControlledValueFix-DFbBCSJx.js";import"./context-v3ONCW42.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Be=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Be as __namedExportsOrder,we as default};
