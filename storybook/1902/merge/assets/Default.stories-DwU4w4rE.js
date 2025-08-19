import{r as M,j as r}from"./iframe-Bgax2JY0.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-yXUmHxRb.js";import{L as P}from"./Label-_IXUlREC.js";import{u as N,F as z,a as U}from"./Form-CkeGbjTN.js";import{s as Y}from"./Action-BPNog73Z.js";import{B as h}from"./Button-DorhvjcK.js";import{m as Z}from"./IconWarning-CIEL4Pty.js";import{C as G}from"./CopyButton-BOwjFjbS.js";import"./PropsContextProvider-CmOrLwYQ.js";import"./mergeRefs-1LV-M9lp.js";import"./index-B-5I2LyG.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DcSiOcsV.js";import"./utils-DhvHJ7nc.js";import"./Text-BnSb9DeM.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-YM833BDX.js";import"./Hidden-DMxEzFkJ.js";import"./useFocusRing-DcvKFQyA.js";import"./useFocus-Bodxhf8B.js";import"./TextField-CBK-xjEz.js";import"./Form-CqpGTvbl.js";import"./useLabel-tzcBKB-Q.js";import"./Label-qLOfPpHT.js";import"./useTextField-B7zXE9Jf.js";import"./useFormReset-CYQ4wC1P.js";import"./useControlledState-ac1T2b60.js";import"./useFocusable-Bp4ESZkx.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BFdd7cAt.js";import"./FieldDescription-0zymrVHp.js";import"./Text-D6HIqkzL.js";import"./browser-CNVsKzoy.js";import"./EmulatedBoldText-CcxcoryL.js";import"./Tooltip-C-aRrYPj.js";import"./OverlayArrow-CYHIASrt.js";import"./ProgressBar-CZQ_VFpR.js";import"./context-Bb8mc0Vr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-uMxvRbqB.js";import"./ReactAriaControlledValueFix-DXvx-PmT.js";import"./ContextualHelpTrigger-DmTJ1FhU.js";import"./Popover-BBsOjuSg.js";import"./DialogTriggerView-oUhD9ZXx.js";import"./context-CPunWrMu.js";import"./useStatic-DXnsBsC9.js";import"./Dialog-BurARqGL.js";import"./Button-DgAfNMgE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-g-wt-ENC.js";import"./RSPContexts-P0zhp91u.js";import"./Collection-Dtx_2tJr.js";import"./CollectionBuilder-D9WqczC4.js";import"./Separator-DIslfa6e.js";import"./SearchField-kAL_jkdT.js";import"./useEvent-BaDyCPVa.js";import"./SelectionManager-CESmDrfy.js";import"./useCollator-DvCxePvq.js";import"./FocusScope-BkaPqd68.js";import"./VisuallyHidden-Dl-5RC8j.js";import"./Heading-n6h-YqbY.js";import"./Heading-BzsP0wx8.js";import"./getActionGroupSlot-dcXhdsbk.js";import"./LoadingSpinner-Bv666wXE.js";import"./react-children-utilities-D_ymIr72.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,v;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var R,L,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,le as __namedExportsOrder,pe as default};
