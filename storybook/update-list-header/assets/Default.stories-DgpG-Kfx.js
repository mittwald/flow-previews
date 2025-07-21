import{r as E,j as r}from"./iframe-p6Bp2Ow-.js";import{d as A,P as a,a as I,s,c as K}from"./PasswordCreationField-Ylf1Pqu3.js";import{L as h}from"./Label-BhgKcmWm.js";import{u as M,F as N,a as z}from"./Form-rEKVmEEP.js";import{s as U}from"./Action-A5AfYnIu.js";import{B as u}from"./Button-BLeGlv8j.js";import{m as Y}from"./IconWarning-_xRihr7t.js";import{C as Z}from"./CopyButton-G3E1F5S7.js";import"./PropsContextProvider-BTW_bpGX.js";import"./mergeRefs-BhA_prJr.js";import"./index-CjBL_wgX.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Drz17t_W.js";import"./utils-CnAbB5du.js";import"./Text-Cx3sBrCD.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-U4W79Xdy.js";import"./useFocusRing-BMw7ZmRN.js";import"./useFocus-DgSV50G0.js";import"./Input-CreDFhOd.js";import"./Hidden-Bh_0QKLq.js";import"./TextField-D4rInykg.js";import"./Form-JnaaWtcr.js";import"./useLabel-Db1j6kak.js";import"./Label-zTn1BqTc.js";import"./useTextField-B_B9v3Ja.js";import"./useFormReset-BpxJN7m8.js";import"./useControlledState-rcKaJ30A.js";import"./useFocusable-B_o37Ayh.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CUHeG-Uy.js";import"./FieldDescription-a6PsZscf.js";import"./Text-BtmxEKoY.js";import"./browser-B4AtpSGe.js";import"./EmulatedBoldText-DJP3uLZJ.js";import"./Tooltip-CJ0BklvW.js";import"./OverlayArrow-jZ3LH-Hh.js";import"./ProgressBar-NAttgbiM.js";import"./context-BreHr6W7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DIJ10SGn.js";import"./ReactAriaControlledValueFix-Bp0gUIy8.js";import"./context-B70X11Ud.js";import"./useStatic-3gyrNX_Q.js";import"./ContextualHelpTrigger-Dh7-b13C.js";import"./Popover-BfkzleVk.js";import"./DialogTriggerView-DhZV5udn.js";import"./Dialog-_gMyH4Hj.js";import"./Button-DuvBnjq7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dx_e9Euk.js";import"./RSPContexts-D2-zMuP7.js";import"./Collection-BslN4fmG.js";import"./CollectionBuilder-0vjbF6vR.js";import"./Separator--jTylhFG.js";import"./SearchField-Djq6QHUL.js";import"./SelectionManager-D33tAYjc.js";import"./useEvent-yXH8ok0I.js";import"./useCollator-DwKmC7HY.js";import"./FocusScope-U7qUa4av.js";import"./VisuallyHidden-DLIZ8dPS.js";import"./Heading-Cfc5zEsW.js";import"./Heading-ietWoT3o.js";import"./getActionGroupSlot-BY1hyZob.js";import"./LoadingSpinner-Aq6Gq52o.js";import"./react-children-utilities-Clwfq659.js";import"./onlyText-CAdJjJ4b.js";function $(e){return e instanceof Promise}const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return $(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Y,{})})]})},l={render:()=>{const e=I.fromDeclaration(H),o=M({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,b,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation()
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
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,d as WithCustomButtons,l as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,le as default};
