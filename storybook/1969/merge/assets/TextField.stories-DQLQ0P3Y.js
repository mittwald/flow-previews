import{j as e}from"./iframe-DE1y3h6K.js";import{A as j}from"./ActionGroup-CfP2gv-p.js";import{B as p}from"./Button-BA8n91r_.js";import{L as o}from"./Label-DZ4SmxIN.js";import{S as f}from"./Section-DnJXdeIl.js";import{T as n}from"./TextField-D6sun001.js";import{a as N,u as b,F,t as S}from"./Form-DL6pgiec.js";import{s as O}from"./Action-COIyfA7V.js";import"./PropsContextProvider-BpZWWW7m.js";import"./mergeRefs-D0m4vR-q.js";import"./index-jyJWLiYa.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CWsUflea.js";import"./useStatic-DRwOE5Oc.js";import"./IconWarning-DpK9giyz.js";import"./Text-pSa9QdzY.js";import"./browser-Ts-qWG1Z.js";import"./EmulatedBoldText-1IxUiC0B.js";import"./Text-BKZgNBXV.js";import"./utils-BuwGAin4.js";import"./LoadingSpinner-rp2WIybp.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CrSxeSmc.js";import"./context-Bl9QONje.js";import"./Button-B7wfEB9A.js";import"./ProgressBar-csi_2Tv3.js";import"./Label-TbKyKJmZ.js";import"./Hidden-C76LoNo0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CHbXUtSy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-W2Z88hDR.js";import"./useFocus-CKbJThq3.js";import"./useFocusRing-BkyGtUZS.js";import"./useFocusable-BnAo6gfc.js";import"./ContextMenuSection-D1uTl_fe.js";import"./Dialog-CprkWIxR.js";import"./RSPContexts-CDFoiued.js";import"./OverlayArrow-DXOomu3A.js";import"./useControlledState-BK9gxWse.js";import"./Collection-D0DOys5j.js";import"./CollectionBuilder-CoWtYmY0.js";import"./Separator-CBnMPT0A.js";import"./Group-BoarCDIk.js";import"./SearchField-Vb_1m6nE.js";import"./FieldError-DorlsVNp.js";import"./Form-BpLNV-sf.js";import"./useTextField-CCT8yJoF.js";import"./useFormReset-CxooHmiE.js";import"./TextField-0H-e0Syb.js";import"./useEvent-B3QERrau.js";import"./SelectionManager-s_1JWMgA.js";import"./useCollator-BUMRQKLH.js";import"./FocusScope-Ch4ZrNXF.js";import"./VisuallyHidden-BAMDsQjq.js";import"./TextFieldBase-CdEIwjRn.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BK11cMw9.js";import"./FieldDescription-DHBL5w3k.js";import"./ReactAriaControlledValueFix-DOpwdcg4.js";import"./context-BCgJ5YhY.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
