import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-CtQTiInQ.js";import{L as s}from"./Label-B5kMao0p.js";import{F as o}from"./FileField-CYQs2qy7.js";import{B as t}from"./Button-CEu5AYHl.js";import{S as H}from"./Section-CCZkXcCk.js";import{F as G}from"./FieldError-b3eTosPs.js";import{F as R}from"./FieldDescription-ClsLWxks.js";import{a as k}from"./IconApp-CRBZNQVh.js";import{u as q,F as w,t as U}from"./Form-Dqa-7B3G.js";import{a as _}from"./index-B-lxVbXh.js";import{A as O}from"./ActionGroup-BReHs3BH.js";import{j as z}from"./IconWarning-DOXxmL8u.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DCw3d_mi.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-DN6_Rp6A.js";import"./useLocalizedStringFormatter-ONfbUjw-.js";import"./Label-BuTtJRrE.js";import"./utils-pqn3Medm.js";import"./Hidden-Dd0lSYNZ.js";import"./FieldError-D1AsG0bn.js";import"./useFocus-Csiud3ul.js";import"./Text-DfUCrkqY.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-C58BIEdL.js";import"./useFocusRing-Dj3VKvGJ.js";import"./Wrap-DQq6jo70.js";import"./Text-gEgSdrgY.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./LoadingSpinner-BNNKZnfN.js";import"./Button-CponIIJZ.js";import"./ProgressBar-SARi2bur.js";import"./useLabel-D55R0JPp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mPwC5UWg.js";import"./useFocusable-D_uDDaTh.js";import"./ContextMenuSection-BkyB3QUj.js";import"./Action-Bf0wozDn.js";import"./context-APykQLEx.js";import"./useStatic-DqbzTIVw.js";import"./getActionGroupSlot-DPD4Fb3w.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CnYyMROF.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-BoaxqqrH.js";import"./useControlledState-BKUqB07S.js";import"./Collection-Bp8QgIDg.js";import"./CollectionBuilder-CLaaElit.js";import"./Separator-DwNpDsab.js";import"./SelectionManager-D1BeontN.js";import"./useEvent-BsCm9_LL.js";import"./useCollator-BGnAy9ct.js";import"./FocusScope-S3AisjuN.js";import"./VisuallyHidden-BArB4NIa.js";import"./v4-CtRu48qb.js";const Xr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=_("submit"),l={},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(R,{children:"Supported formats: .pem, .pfx"})]})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(G,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(k,{children:r.jsx(z,{})})})})},d={render:e=>{const[n,a]=P.useState(null),i=n==null?void 0:n[0];return r.jsxs(H,{children:[r.jsxs(o,{...e,isInvalid:!0,onChange:a,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const e=q(),n=U();return r.jsx(w,{form:e,onSubmit:J,children:r.jsxs(H,{children:[r.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:r.jsxs(o,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=e.watch("file"))==null?void 0:a[0])==null?void 0:i.name,r.jsx(O,{children:r.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,B,v;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(v=(B=m.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,C,L;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var W,D,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Yr=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,p as IconButton,c as WithDescription,m as WithError,d as WithHandler,u as WithReactHookForm,Yr as __namedExportsOrder,Xr as default};
