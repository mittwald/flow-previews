import{j as r}from"./iframe-BKOyO0tU.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-WHLX57m9.js";import{L as m}from"./Link-p6dzj-zf.js";import{H as s}from"./HeaderNavigation-WZ6tzqBZ.js";import{B as o}from"./Button-BRmnXyIg.js";import{T as p}from"./Text-ExzQZ1Qc.js";import{I as C}from"./Image-CoVDx-bH.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BdK8BCU9.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BMEiJXhF.js";import"./ContextMenuSection-DnHutdVr.js";import{a as D,M as E}from"./Modal-DCRdfXNF.js";import{H as G}from"./Heading-D4sbKPQv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DS9p18js.js";import"./mergeRefs-D0EZPsCM.js";import"./index-Dkj0bwU1.js";import"./useLocalizedStringFormatter-D0EJq48y.js";import"./context-wvutwpZE.js";import"./utils-B2BekvYW.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CfgifMFV.js";import"./useFocus-dHggTvNn.js";import"./useFocusRing-D97-YwB6.js";import"./useFocusable-C3wI1ws-.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B8cx3qaz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DqwKzt0W.js";import"./ProgressBar-w7N8Fjyu.js";import"./Label-Vv3VD8Wn.js";import"./Hidden-DB9d8bX3.js";import"./useLabel-kfVNblq3.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-8Kbc9Tso.js";import"./EmulatedBoldText-BBGOeiRU.js";import"./Text-ACnzImZy.js";import"./AlertIcon-DfoV-BMD.js";import"./Action-C_4EL_0e.js";import"./context-rPjQ9i-i.js";import"./useStatic-DBBw__yr.js";import"./getActionGroupSlot-mCG5t0cx.js";import"./Popover-Cs1rFuXv.js";import"./DialogTriggerView-D92SRtaq.js";import"./Dialog-BbUqm1un.js";import"./RSPContexts-BmPvawj4.js";import"./OverlayArrow-CigCDiMF.js";import"./useControlledState-B16HJi6R.js";import"./Collection-B9hkeg3n.js";import"./CollectionBuilder-We_6F8vb.js";import"./Separator-D6PmSFnu.js";import"./Group-iIjIB8eM.js";import"./SearchField-BqOdnuK_.js";import"./FieldError-D2kmkBqC.js";import"./Form-D-YH0smr.js";import"./useTextField-BsmA_XUC.js";import"./useFormReset-ONA6akXl.js";import"./TextField-tmvkgR0S.js";import"./useEvent-DwmS6HpG.js";import"./SelectionManager-CLkO3KW8.js";import"./useCollator-CK3XalJA.js";import"./FocusScope-Sz51FCf6.js";import"./VisuallyHidden-hdWyDAKj.js";import"./Switch-Bv-tj7VR.js";import"./Label-DvNp2qob.js";import"./useToggleState-he4B6Zr1.js";import"./Overlay-Q4JUlUeS.js";import"./ButtonView-SD8FVTD_.js";import"./Heading-CmuzmpL9.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
