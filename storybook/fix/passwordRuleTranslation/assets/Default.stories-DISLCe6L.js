import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as t,a as A,s as o,c as I}from"./PasswordCreationField-D7ZgDR6s.js";import{r as V}from"./index-BdpSHsi2.js";import{L as u}from"./Label-Dwg101gb.js";import{a as _}from"./index-B-lxVbXh.js";import{u as z,F as K,a as N}from"./Form-C_CXdryh.js";import{s as O}from"./Action-BP77jz-w.js";import{B as d}from"./Button-BpNY0haX.js";import{w as Z}from"./IconWarning-DxEOF75m.js";import{C as G}from"./CopyButton-DLGzFhW7.js";import"./PropsContextProvider-CANyxF-L.js";import"./mergeRefs-f9wmNE8z.js";import"./clsx-B-dksMZM.js";import"./iframe-DIlTCPcl.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Dhym38A1.js";import"./utils-CNUJJGcD.js";import"./Text-BJ9sUP_l.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-ryYih4mY.js";import"./useFocusRing-BmK03SYd.js";import"./useFocus-Ck8e1iB7.js";import"./Input--iZvazXr.js";import"./Hidden-RoZfe91Z.js";import"./TextField-DnxvqTg5.js";import"./Form-CXVBffIi.js";import"./useLabel-XC8v3O7U.js";import"./Label-DsLtIi5U.js";import"./useTextField-fBojglfp.js";import"./useFormReset-Tdit5Ane.js";import"./useControlledState-rjpdN6qd.js";import"./useFocusable-CxpMFfxV.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DJt_lBWT.js";import"./FieldDescription-DaQNRbMR.js";import"./Text-BFj9Gq9S.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./index-BAMY2Nnw.js";import"./Tooltip-BSzKatkB.js";import"./OverlayArrow-BVOH5h02.js";import"./ProgressBar-BKoZZ6mR.js";import"./context-b6TG5uw0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DnyHa0G6.js";import"./ReactAriaControlledValueFix-BLJm2WOQ.js";import"./context-BCmx_5Vu.js";import"./useStatic-Od-axZtX.js";import"./ContextualHelpTrigger-CGIGFNH9.js";import"./Popover-C5FvJ4XT.js";import"./DialogTriggerView-TIQ980RF.js";import"./Dialog-9HjW71o-.js";import"./Button-Cg-C5DwG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DWaDT6O_.js";import"./RSPContexts-Cbm9ZJUe.js";import"./Collection-DM8z4Ehe.js";import"./CollectionBuilder-CnXQkgAs.js";import"./Separator-COTp_Dm9.js";import"./SearchField-D6iOCfE6.js";import"./SelectionManager-DHrlGRPM.js";import"./useEvent-Bvgrsh8W.js";import"./useCollator-DUFyk2vx.js";import"./FocusScope-BN4baDIG.js";import"./VisuallyHidden-QAya5EjI.js";import"./Heading-CynZFzVk.js";import"./Heading-glOOglw2.js";import"./v4-CtRu48qb.js";import"./getActionGroupSlot-DwhCMz3L.js";import"./LoadingSpinner-CQgtlwDo.js";import"./react-children-utilities-DvaK_N8_.js";import"./onlyText-C2raRYWa.js";const H={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[I.number],maxLength:2},{ruleType:o.regex,pattern:"[A-B]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Po={title:"Form Controls/PasswordCreationField",component:t,render:e=>r.jsx(t,{onChange:_("onChange"),...e,children:r.jsx(u,{children:"Password"})})},a={},i={args:{isDisabled:!0}},n={args:{isRequired:!0}},m={args:{placeholder:"helloMoto"}},p={render:e=>r.jsxs(t,{...e,children:[r.jsx(u,{children:"Password"}),r.jsx(d,{children:r.jsx(Z,{})})]})},c={render:()=>{const e=A.fromDeclaration(H),s=z({defaultValues:{password:""}});return r.jsxs(K,{form:s,onSubmit:async()=>await O(2e3),children:[r.jsx(N,{rules:{required:!0},name:"password",children:r.jsxs(t,{validationPolicy:e,children:[r.jsx(u,{children:"Password"}),r.jsx(d,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(d,{onPress:()=>s.reset(),children:"Reset"}),r.jsx(d,{type:"submit",children:"Submit"})]})}},l={render:e=>{const[s,M]=V.useState("");return r.jsxs(t,{onChange:k=>M(k),...e,children:[r.jsx(u,{children:"Password"}),r.jsx(G,{text:s})]})}};var h,x,P;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(P=(x=a.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var w,b,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,g,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var F,j,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(D=p.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var W,q,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(T=(q=c.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var R,v,E;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const wo=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{a as Default,i as Disabled,n as Required,l as WithCopyButton,p as WithCustomButtons,c as WithForm,m as WithPlaceholder,wo as __namedExportsOrder,Po as default};
