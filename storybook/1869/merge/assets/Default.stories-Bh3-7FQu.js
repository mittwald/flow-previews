import{r as M,j as r}from"./iframe-qMbEE3nZ.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-B2gVvPxs.js";import{L as h}from"./Label-Qwuh2gM1.js";import{u as N,F as z,a as U}from"./Form-BMiel3I7.js";import{s as Y}from"./Action-DzKOjeMN.js";import{B as u}from"./Button-B092bVJN.js";import{m as Z}from"./IconWarning-CQwCi0eF.js";import{C as G}from"./CopyButton-DSz6TEdK.js";import"./PropsContextProvider-GFGOiqrH.js";import"./mergeRefs-BuWec918.js";import"./index-HDYuzCzu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BHMg81Vw.js";import"./utils-BD_t44OF.js";import"./Text-cBZJFSe0.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CL0zaHSQ.js";import"./Hidden-D7F7fo4_.js";import"./useFocusRing-lD94xzjb.js";import"./useFocus-DS8qI1YX.js";import"./TextField-Dz9bsQp0.js";import"./Form-3qXBak_6.js";import"./useLabel-Cq2dGHOX.js";import"./Label-D0MPEMQA.js";import"./useTextField-CGiD1Ab0.js";import"./useFormReset-D9SBe6RC.js";import"./useControlledState-CNYZu0wD.js";import"./useFocusable-D_wGn8G3.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BKpgIzk8.js";import"./FieldDescription-UFnh7aPi.js";import"./Text-BBRqDbdK.js";import"./browser-CDpjXLqz.js";import"./EmulatedBoldText-DSEgcFLX.js";import"./Tooltip-DrB5EYSv.js";import"./OverlayArrow-UgIBIUFh.js";import"./ProgressBar-CF9ToJta.js";import"./context-DPxByHJI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D-75WDAr.js";import"./ReactAriaControlledValueFix-DMQ5BcR6.js";import"./ContextualHelpTrigger-Dfu5rMf5.js";import"./Popover-DMdY6O5S.js";import"./DialogTriggerView-uudYIBUg.js";import"./context-DL-Maxx4.js";import"./useStatic-DJ16hY-2.js";import"./Dialog-BnaF-Tc6.js";import"./Button-Bonbvv9K.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-7HicN3cp.js";import"./RSPContexts-CqdzRs7m.js";import"./Collection-BoGlwmNV.js";import"./CollectionBuilder--Vm7JqBi.js";import"./Separator-i61FpY_s.js";import"./SearchField-BlvkDSgb.js";import"./useEvent-CCJQzPdu.js";import"./SelectionManager-CTJHExhr.js";import"./useCollator-DOCzDbFi.js";import"./FocusScope-phx_Kgk6.js";import"./VisuallyHidden-BVlRlsah.js";import"./Heading-DIXtQ1Is.js";import"./Heading-YSxCqyos.js";import"./getActionGroupSlot-BWxTvQ86.js";import"./LoadingSpinner-YXQaSanI.js";import"./react-children-utilities-iPLBtGzT.js";import"./onlyText-B7uvOCdP.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,v,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var T,W,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
