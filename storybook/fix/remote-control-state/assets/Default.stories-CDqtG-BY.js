import{j as r}from"./iframe-BKWcqz6w.js";import{D as k,$ as S,X as b,H as v,a0 as B}from"./IconWarning-CiiLQ5Id.js";import{L as m}from"./Link-BdajzGpG.js";import{H as s}from"./HeaderNavigation-Cpay8FsZ.js";import{B as o}from"./Button-CDMbyENh.js";import{T as p}from"./Text-Fi67VBtl.js";import{I as C}from"./Image-BLQrD73q.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-ByEn0fqu.js";import{a as D,C as y,M as c}from"./ContextMenuContent-jrdqe5mY.js";import"./ContextMenuSection-D_1EtZXH.js";import{a as A,M as G}from"./Modal-DhjayjpF.js";import{H as E}from"./Heading-Bzn4J5ZV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C5Igvylm.js";import"./mergeRefs-C4ZbtdaD.js";import"./index-DJrDs1kh.js";import"./useLocalizedStringFormatter-DH0uxzC_.js";import"./context-QVFAHjz-.js";import"./utils-CQeLeN4J.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BwfaRRJR.js";import"./useFocus-BlH6xcxh.js";import"./useFocusRing-BgI-Wk5t.js";import"./useFocusable-BSIifKXa.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DjG0OPxh.js";import"./Button-VVXhfFKF.js";import"./ProgressBar-C6vJSYrT.js";import"./Label-D6DYt8_O.js";import"./Hidden-CkZKnpKj.js";import"./useLabel-D1fNKuwy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DUKC-94T.js";import"./EmulatedBoldText-BJOxnJTr.js";import"./Text-ChPHkoYL.js";import"./AlertIcon-WNbTDQjz.js";import"./Action-BG2HGkiJ.js";import"./context-fbLD2I4R.js";import"./useStatic-wPZWVCFd.js";import"./getActionGroupSlot-DjN4KLUT.js";import"./Popover-Zds_k-HN.js";import"./DialogTriggerView-BQEPAYwQ.js";import"./Dialog-DhBeDFtI.js";import"./RSPContexts-DdS6JTeo.js";import"./OverlayArrow-vSfQPgA4.js";import"./useControlledState-D-vJPGY9.js";import"./Collection-C7UaXUW1.js";import"./CollectionBuilder-DDv9MTUl.js";import"./Separator-0bHFPMSf.js";import"./Input-BenWenGs.js";import"./SearchField-BUGK_Wf7.js";import"./FieldError-B_JMWavC.js";import"./Form-DoHwQU7E.js";import"./Group-DfxlRKcN.js";import"./useTextField-C8uxY6vr.js";import"./useFormReset-DXZOmU-A.js";import"./TextField-CHY6h4XH.js";import"./SelectionManager-D5GxgTFL.js";import"./useEvent-BzcH6Ltb.js";import"./useCollator-DIoPzu3e.js";import"./FocusScope-uRnVEpI_.js";import"./VisuallyHidden-DSrM5G1n.js";import"./Switch-Dk7VRY9D.js";import"./Label-Cbbeq5AD.js";import"./useToggleState-D4NqhCjm.js";import"./Overlay-PPao1S_W.js";import"./Header-Co9TC2x4.js";import"./ButtonView-DtRcapUT.js";import"./Heading-Brw0cfIy.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};
