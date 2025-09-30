import{r as q,j as r}from"./iframe-BxDpVhRd.js";import{P as m}from"./PasswordCreationField-nSo1oUUI.js";import{L as u}from"./Label-CMeeurCB.js";import{B as y}from"./Button-COfabfFq.js";import{p as E}from"./IconWarning-CR1PBxFk.js";import{C as v}from"./CopyButton-BmLNpEUm.js";import"./index-Cun1SEai.js";import"./dynamic-ByIuCnCH.js";import"./PropsContextProvider-D577-dj4.js";import"./mergeRefs-Bevg5I71.js";import"./index-BnQUCq-S.js";import"./clsx-B-dksMZM.js";import"./FieldError-BrR5GiZM.js";import"./utils-CpjREF5t.js";import"./Text-Bq0GBBEx.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BMNJ9slh.js";import"./useFocusRing-DkmhKsWm.js";import"./useFocus-DCdhMrgy.js";import"./Input-CLCKEIJY.js";import"./Hidden-sa0o7Y_i.js";import"./TextField-DQk9fvM2.js";import"./context-BRTadV_G.js";import"./Form-DnVdWn9l.js";import"./Label-CcH2uIQ5.js";import"./useTextField-BZVylDiv.js";import"./useFormReset-BdOLdhs-.js";import"./useControlledState-B0hr1ZXY.js";import"./useFocusable-Bb-ubJOz.js";import"./useFormValidation-BO_UVXRs.js";import"./FormField.module-CqWyJNQI.js";import"./Action-CQ_Tet5k.js";import"./context-CdLDj7bD.js";import"./useStatic-DKuo4ovu.js";import"./browser-DkE4SP-u.js";import"./getActionGroupSlot-DfO33wTs.js";import"./FieldError-Bmq-pcAK.js";import"./FieldDescription-C72SkzYM.js";import"./Text-HfVZjSfr.js";import"./EmulatedBoldText-Di64OaFb.js";import"./Tooltip-_HLUk4pp.js";import"./ClearPropsContextView-Ff-_bWul.js";import"./ProgressBar-CjBgSU-K.js";import"./context-CSPhd592.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BeMG850z.js";import"./ReactAriaControlledValueFix-CKJKlinu.js";import"./ContextualHelpTrigger-FAGn_582.js";import"./Popover-DsSNZzMW.js";import"./DialogTriggerView-GlI_-8yJ.js";import"./Button-CJ12dAAc.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cfg_1SLq.js";import"./RSPContexts-CaPgNpVT.js";import"./FocusScope-CQY-r9mi.js";import"./useCollator-1chl5SyN.js";import"./VisuallyHidden-DX-N6FS4.js";import"./Collection-tycL-zcz.js";import"./CollectionBuilder-DsOEphd0.js";import"./Separator-CnqlmT3o.js";import"./SelectionManager-BIdKqwjQ.js";import"./useEvent-DUrYkmv0.js";import"./Heading-Do4p4EAu.js";import"./Heading-BzGwSJzV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-_TsG-qZC.js";import"./LoadingSpinner-D1vbb_I_.js";import"./react-children-utilities-CM2FQFQ8.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=q.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(y,{children:r.jsx(E,{})})]})},p={render:o=>{const[n,d]=q.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(v,{text:n})]})}};var h,g,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var w,P,x;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(P=e.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var j,B,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var b,f,D;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(f=a.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var R,_,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(F=(_=i.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var L,O,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const Xr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,i as WithCustomButtons,a as WithPlaceholder,Xr as __namedExportsOrder,Qr as default};
