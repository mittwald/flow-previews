import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as c,a as R,s as o,c as W}from"./PasswordCreationField-Dky5VO2e.js";import"./index-BdpSHsi2.js";import{L as l}from"./Label-DjJU0gqA.js";import{a as M}from"./index-B-lxVbXh.js";import{u as k,F as v,a as A}from"./Form-0j_d8wul.js";import{s as E}from"./Action-BbVuO0KL.js";import{B as p}from"./Button-B4A2XH58.js";import{w as I}from"./IconWarning-DCPm6Thg.js";import"./PropsContextProvider-DnxO5avC.js";import"./mergeRefs-COuk0-v5.js";import"./clsx-B-dksMZM.js";import"./iframe-2XJ608vZ.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-D2eBwE7I.js";import"./utils-q_Aud5Js.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-wR-qYHNv.js";import"./useFocusRing-DY5AGIis.js";import"./useFocus-4XTC7e6o.js";import"./Input-Dom3MqAg.js";import"./Hidden-RoZfe91Z.js";import"./TextField-BqNO7Lq4.js";import"./Form-CSvT4C5Q.js";import"./useLabel-DtWExE0a.js";import"./Label-C5gSD-Mq.js";import"./useTextField-xVyqyefx.js";import"./useFormReset-B9LhY6oC.js";import"./useControlledState-rjpdN6qd.js";import"./useFocusable-BXcKiciC.js";import"./useFormValidation-BP6joqgG.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BXwenTDh.js";import"./FieldDescription-DU-_pxqW.js";import"./Text-C_2ARRZ-.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./index-BAMY2Nnw.js";import"./Tooltip-CVZ3fbfG.js";import"./OverlayArrow-Czdks72e.js";import"./ProgressBar-Dwuqfbjf.js";import"./context-C-2WHVw-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./ReactAriaControlledValueFix-SEnjHoLp.js";import"./context-CcaOJZ7_.js";import"./useStatic-NzMx8TMJ.js";import"./ContextualHelpTrigger-0Ih5aJhf.js";import"./Popover-BsqzIVzV.js";import"./DialogTriggerView-D9ZaZwFu.js";import"./Dialog-CnnCEkMG.js";import"./Button-B8HIYCal.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mDFtgnbt.js";import"./RSPContexts-Cbm9ZJUe.js";import"./Collection-CgAMQp3e.js";import"./CollectionBuilder-DkA--_MS.js";import"./Separator-Dc9-x765.js";import"./SelectionManager-ClU3Y9Vn.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-CmZhdF0V.js";import"./FocusScope-D_x47-q0.js";import"./VisuallyHidden-D-Ys6Nju.js";import"./Heading-CncqC9cj.js";import"./Heading-PKR8zMP8.js";import"./v4-CtRu48qb.js";import"./getActionGroupSlot-DPDmJdd_.js";import"./LoadingSpinner-gGsyPL53.js";const V={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[W.number],maxLength:2},{ruleType:o.regex,pattern:"[A-B]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},so={title:"Form Controls/PasswordCreationField",component:c,render:e=>r.jsx(c,{onChange:M("onChange"),...e,children:r.jsx(l,{children:"Password"})})},t={},s={args:{isDisabled:!0}},i={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},m={render:e=>r.jsxs(c,{...e,children:[r.jsx(l,{children:"Password"}),r.jsx(p,{children:r.jsx(I,{})})]})},n={render:()=>{const e=R.fromDeclaration(V),d=k({defaultValues:{password:""}});return r.jsxs(v,{form:d,onSubmit:async()=>await E(2e3),children:[r.jsx(A,{rules:{required:!0},name:"password",children:r.jsxs(c,{validationPolicy:e,children:[r.jsx(l,{children:"Password"}),r.jsx(p,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(p,{onPress:()=>d.reset(),children:"Reset"}),r.jsx(p,{type:"submit",children:"Submit"})]})}};var u,h,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,P,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(P=s.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var y,g,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var F,j,B;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(B=(j=a.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var C,D,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var q,T,L;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true
      }} name="password">
          <PasswordCreationField validationPolicy={policy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(L=(T=n.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const io=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm"];export{t as Default,s as Disabled,i as Required,m as WithCustomButtons,n as WithForm,a as WithPlaceholder,io as __namedExportsOrder,so as default};
