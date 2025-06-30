import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as c,a as T,s as o,c as W}from"./PasswordCreationField-BMJwfCEC.js";import"./index-BdpSHsi2.js";import{L as l}from"./Label-DmnTb0KL.js";import{a as M}from"./index-B-lxVbXh.js";import{u as k,F as v,a as E}from"./Form-DoCZ3-f2.js";import{s as I}from"./Action-CYABpvN2.js";import{B as p}from"./Button-COxCjr4W.js";import{w as V}from"./IconWarning-DqZnQ37C.js";import"./PropsContextProvider-D7XpJMjl.js";import"./mergeRefs-COuk0-v5.js";import"./clsx-B-dksMZM.js";import"./iframe-Cr61LjVx.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-D2eBwE7I.js";import"./utils-q_Aud5Js.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-wR-qYHNv.js";import"./useFocusRing-DY5AGIis.js";import"./useFocus-4XTC7e6o.js";import"./Input-Dom3MqAg.js";import"./Hidden-RoZfe91Z.js";import"./TextField-BqNO7Lq4.js";import"./Form-CSvT4C5Q.js";import"./useLabel-DtWExE0a.js";import"./Label-C5gSD-Mq.js";import"./useTextField-xVyqyefx.js";import"./useFormReset-B9LhY6oC.js";import"./useControlledState-rjpdN6qd.js";import"./useFocusable-BXcKiciC.js";import"./useFormValidation-BP6joqgG.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CwICyLEB.js";import"./FieldDescription-BfBFjdVt.js";import"./Text-USfqZ1-K.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./index-BAMY2Nnw.js";import"./Tooltip-0Z6fTLJr.js";import"./OverlayArrow-fUY3Kb5L.js";import"./ProgressBar-DbWwTk60.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./NumberFormatter-DNR9MAW-.js";import"./ReactAriaControlledValueFix-SEnjHoLp.js";import"./context-GxXlUYOT.js";import"./useStatic-VlFWjJup.js";import"./ContextualHelpTrigger-DIyUzyS1.js";import"./Popover-DvaIqyR_.js";import"./DialogTriggerView-Cv6PA901.js";import"./Dialog-HD9t1mUg.js";import"./Button-BV9jeieD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mDFtgnbt.js";import"./RSPContexts-Cbm9ZJUe.js";import"./Collection-CgAMQp3e.js";import"./CollectionBuilder-DkA--_MS.js";import"./Separator-Dc9-x765.js";import"./SelectionManager-DweNvqjD.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-DWYYoDxV.js";import"./FocusScope-D_x47-q0.js";import"./VisuallyHidden-D-Ys6Nju.js";import"./Heading-CYArMw00.js";import"./Heading-PKR8zMP8.js";import"./v4-CtRu48qb.js";import"./getActionGroupSlot-BY7yNHLS.js";import"./LoadingSpinner-CjyBF-GL.js";const _={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[W.number],maxLength:2},{ruleType:o.regex,pattern:"[A-B]",min:1,max:2},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},to={title:"Form Controls/PasswordCreationField",component:c,render:e=>r.jsx(c,{onChange:M("onChange"),...e,children:r.jsx(l,{children:"Password"})})},t={},s={args:{isDisabled:!0}},i={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},m={render:e=>r.jsxs(c,{...e,children:[r.jsx(l,{children:"Password"}),r.jsx(p,{children:r.jsx(V,{})})]})},n={render:()=>{const e=T.fromDeclaration(_),d=k({defaultValues:{password:""}});return r.jsxs(v,{form:d,onSubmit:async()=>await I(2e3),children:[r.jsx(E,{rules:{required:!0},name:"password",children:r.jsxs(c,{validationPolicy:e,children:[r.jsx(l,{children:"Password"}),r.jsx(p,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(p,{type:"submit",children:"Submit"}),r.jsx(p,{onPress:()=>d.reset({password:""}),children:"Reset"})]})}};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,P,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(P=s.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var g,w,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var F,j,B;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var q,L,R;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
        <Button onPress={() => form.reset({
        password: ""
      })}>Reset</Button>
      </Form>;
  }
}`,...(R=(L=n.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const so=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm"];export{t as Default,s as Disabled,i as Required,m as WithCustomButtons,n as WithForm,a as WithPlaceholder,so as __namedExportsOrder,to as default};
