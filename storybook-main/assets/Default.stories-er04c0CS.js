import{R as e,r as H}from"./index-B-o1Wr-g.js";import{L as a}from"./Label-DMTVGheq.js";import{F as r}from"./FileField-P71EGqgD.js";import{B as o}from"./Button-DxJ53Gh-.js";import{S as R}from"./Section-C95XPHSb.js";import{F as k}from"./FieldError-BwW70r6b.js";import{F as G}from"./FieldDescription-BvIaD1wI.js";import{c as q,a as w}from"./IconApp-B0VM5pA-.js";import{u as U,F as _,t as M}from"./Form-DIFZdCAB.js";import{a as O}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{A as j}from"./ActionGroup-BZDDDlqR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bi8R7MU8.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Label-CqgmsInd.js";import"./utils-7gTBvjqH.js";import"./Hidden-CRdWNeH8.js";import"./FieldError-Dc7wTCBj.js";import"./useFocusRing-CTDVvBmm.js";import"./Text-R-rrVGxo.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-In3k7nSs.js";import"./IconWarning-CeoFRZGA.js";import"./Wrap-DQq6jo70.js";import"./Text-Cxo14Dks.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./LoadingSpinner-BIc094zz.js";import"./Button-CPCoFgob.js";import"./ProgressBar-BQAJCbMD.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./usePress-C3EQNDer.js";import"./ContextMenuSection-VhEUIc7O.js";import"./Action-_v7HSv4S.js";import"./context-tra5QY3B.js";import"./useStatic-DVVlOpvb.js";import"./getActionGroupSlot-7U_pQ_UO.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CbvlC6bd.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuXMKzfT.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./SelectionManager-ubMUrr_P.js";import"./FocusScope-DvafcTTH.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./v4-CQkTLCs1.js";/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var z=q("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const Te={title:"Form Controls/FileField",component:r,render:t=>e.createElement(r,{...t},e.createElement(a,null,"Certificate"),e.createElement(o,{variant:"outline",color:"secondary"},"Select"))},J=O("submit"),c={},m={render:t=>e.createElement(r,{...t},e.createElement(a,null,"Certificate"),e.createElement(o,{variant:"outline",color:"secondary"},"Select"),e.createElement(G,null,"Supported formats: .pem, .pfx"))},s={render:t=>e.createElement(r,{...t,isInvalid:!0},e.createElement(a,null,"Certificate"),e.createElement(o,{variant:"outline",color:"secondary"},"Select"),e.createElement(k,null,"File too large"))},p={render:t=>e.createElement(r,{...t},e.createElement(o,{variant:"soft","aria-label":"Select certificate"},e.createElement(w,null,e.createElement(z,null))))},u={render:t=>{const[i,l]=H.useState(null),n=i==null?void 0:i[0];return e.createElement(R,null,e.createElement(r,{...t,isInvalid:!0,onChange:l},e.createElement(a,null,"Certificate"),e.createElement(o,{variant:"outline",color:"secondary"},"Select")),n==null?void 0:n.name)}},d={render:()=>{var l,n;const t=U(),i=M();return e.createElement(_,{form:t,onSubmit:J},e.createElement(R,null,e.createElement(i,{name:"file",rules:{required:"Please choose a file"}},e.createElement(r,{multiple:!0},e.createElement(a,null,"Certificate"),e.createElement(o,{variant:"outline",color:"secondary"},"Select"))),(n=(l=t.watch("file"))==null?void 0:l[0])==null?void 0:n.name,e.createElement(j,null,e.createElement(o,{type:"submit"},"Upload"))))}};var F,f,E;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(E=(f=c.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var S,b,v;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(v=(b=m.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,h,y;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,I,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var g,W,D;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(D=(W=u.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var A,x,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(x=d.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const Ve=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{c as Default,p as IconButton,m as WithDescription,s as WithError,u as WithHandler,d as WithReactHookForm,Ve as __namedExportsOrder,Te as default};
