import{j as e}from"./iframe-D6MXtoeF.js";import{A as j}from"./ActionGroup-Bzgw348M.js";import{B as p}from"./Button-Cps8fs86.js";import{L as t}from"./Label-DskNCC55.js";import{S as f}from"./Section-yKZ3j0lj.js";import{T as n}from"./TextField-6nuYc0y4.js";import{a as V,u as b,F,t as S}from"./Form-CWVhtDGl.js";import{s as g}from"./Action-BE7fSEbk.js";import"./PropsContextProvider-DKdwmELu.js";import"./mergeRefs-DOKhc8cj.js";import"./index-fKpd1sOg.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-hiKhMcUy.js";import"./useStatic-BOJiZlFD.js";import"./IconWarning-BzCByWga.js";import"./Text-BFMh0nyW.js";import"./browser-B8Nd9l3q.js";import"./EmulatedBoldText-238cra3f.js";import"./Text-X88WQLD_.js";import"./utils-B7M3k9FN.js";import"./LoadingSpinner-BP-swr7r.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-lfwtdpdt.js";import"./context-Ck2zuvqd.js";import"./Button-QOiUMIUW.js";import"./ProgressBar-bcTJnrQg.js";import"./Label-BFW3y9SA.js";import"./Hidden-Cmo_PwmO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D8eXzRI6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ct6Wvp4V.js";import"./useFocus-DFkM6utj.js";import"./useFocusRing-DiO0sb-8.js";import"./useFocusable-mpne-nRN.js";import"./ContextMenuSection-DAHajvSv.js";import"./Dialog-DTX65kLp.js";import"./RSPContexts-DRsXlI21.js";import"./OverlayArrow-DzYaWuxq.js";import"./useControlledState-CXEx0L1H.js";import"./Collection-Cv5VHUKE.js";import"./CollectionBuilder-C1kbEgCd.js";import"./Separator-DFJzdh8J.js";import"./Group-DIpddcx2.js";import"./SearchField-BsFidkN3.js";import"./FieldError-DNUFoHGF.js";import"./Form-DWnjCikM.js";import"./useTextField-Ct6WOc7M.js";import"./useFormReset-a1QiC8fx.js";import"./TextField-D8-3KKgU.js";import"./useEvent-BvqgWnZ6.js";import"./SelectionManager-D5CRlMya.js";import"./useCollator-K4h4KKi7.js";import"./FocusScope-NXX1qwdY.js";import"./VisuallyHidden-B-VJ1Jd7.js";import"./TextFieldBase-DnPjc-Bp.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-y6YOgSXV.js";import"./FieldDescription-BnwEgjZt.js";import"./ReactAriaControlledValueFix-PNMAWQp-.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./context-0wOjLTza.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Be={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
