import{j as r}from"./iframe-k40rl9C_.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-Cbv9M52D.js";import{L as m}from"./Link-DPs53mkj.js";import{H as s}from"./HeaderNavigation-DgLcEIFI.js";import{B as o}from"./Button-kvMweZlt.js";import{T as p}from"./Text-B-gvPcDV.js";import{I as C}from"./Image-CVD3iaGz.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CfCYCnxI.js";import{a as y,C as A,M as c}from"./ContextMenuContent-iEyI1AVJ.js";import"./ContextMenuSection-ccfdorOp.js";import{a as D,M as G}from"./Modal-_zQtVNB3.js";import{H as E}from"./Heading-CD53dk9d.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DHimXFH6.js";import"./mergeRefs-DeLnkq3n.js";import"./index-0ME5rF8X.js";import"./useLocalizedStringFormatter-DKKzTgA5.js";import"./context-B7pdk5J-.js";import"./utils-KRUPT0lQ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CdMS6zrp.js";import"./useFocus-CSVfmLbx.js";import"./useFocusRing-xJVp1dT7.js";import"./useFocusable-Bkb1JWUQ.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BP4NYh9i.js";import"./Button-BPg5w5qS.js";import"./ProgressBar-CLj2PpPD.js";import"./Label-DIzINetI.js";import"./Hidden-U9FjqIX0.js";import"./useLabel-D45A24Bq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-CjSC5npA.js";import"./EmulatedBoldText-BNBH8DgQ.js";import"./Text-BHVi9XYC.js";import"./AlertIcon-CBlevsH8.js";import"./Action-B7n1-Sy0.js";import"./context-D0ri2Dmb.js";import"./useStatic-DmhG0skw.js";import"./getActionGroupSlot-U4y_tPB5.js";import"./Popover-Dc3psDpE.js";import"./DialogTriggerView-BqkYAwTD.js";import"./Dialog-DFB0ODmg.js";import"./RSPContexts-D3A90Utg.js";import"./OverlayArrow-QTNcdBpj.js";import"./useControlledState-BJUCb_CR.js";import"./Collection-kWkb4Zd-.js";import"./CollectionBuilder-ByxuUit6.js";import"./Separator-8D9fucmC.js";import"./Group-chjP6waA.js";import"./SearchField-CwrX6gQO.js";import"./FieldError-rn1TZOfn.js";import"./Form-c2DgNPZJ.js";import"./useTextField-C_psbwqH.js";import"./useFormReset-CIlCc03R.js";import"./TextField-SZ2aXgcA.js";import"./useEvent-DRBB5MX_.js";import"./SelectionManager-BMLyIVh6.js";import"./useCollator-84Y8Mk4i.js";import"./FocusScope-D54ZyU14.js";import"./VisuallyHidden-CgVp0Wt0.js";import"./Switch-DkJ_WS1n.js";import"./Label-f_MJI4Fh.js";import"./useToggleState-DK0QoDyv.js";import"./Overlay-DxATOLdi.js";import"./Header-Cu2uDexd.js";import"./ButtonView-BlClRxR_.js";import"./Heading-aFM3slTD.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
