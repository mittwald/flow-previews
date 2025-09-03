import{j as r}from"./iframe-DjexR8Tp.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-iYDgM4y1.js";import{L as m}from"./Link-D2ZwAdjc.js";import{H as s}from"./HeaderNavigation-g3joxSkp.js";import{B as o}from"./Button-DYqAz9Ax.js";import{T as p}from"./Text-aOHzhDvr.js";import{I as C}from"./Image-BIid5P12.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DhNj2Dam.js";import{a as y,C as A,M as c}from"./ContextMenuContent-C9rXmh3U.js";import"./ContextMenuSection-CNleQ0q4.js";import{a as D,M as E}from"./Modal-DIYkX3AB.js";import{H as G}from"./Heading-DiglFhW3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNncApHm.js";import"./mergeRefs-CBM20YoL.js";import"./index-D_XyFzRd.js";import"./useLocalizedStringFormatter-DCr69HqY.js";import"./context-CVxCaAZx.js";import"./utils-T6f7ZmRV.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-mG8JzCXO.js";import"./useFocus-Bu01zz1F.js";import"./useFocusRing-DmJAPvY7.js";import"./useFocusable-C3y7tw8Z.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-D4t9V_YE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9QzJYPZ.js";import"./ProgressBar-DpKa1PlM.js";import"./Label-Guiqn7_R.js";import"./Hidden-DuO80z64.js";import"./useLabel-Ott8nG03.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B8Z7dOtx.js";import"./EmulatedBoldText-DPzl8Gjb.js";import"./Text-Xp1USGoa.js";import"./AlertIcon-DGb2g5Zu.js";import"./Action-DUBUW5Iv.js";import"./context-DVKjoroo.js";import"./useStatic-BfaH_n72.js";import"./getActionGroupSlot-CoanvWNS.js";import"./Popover-CvxF9MLE.js";import"./DialogTriggerView-B9cJTcHh.js";import"./Dialog-D-o_xP1i.js";import"./RSPContexts-BkQTRtx0.js";import"./OverlayArrow-OIwcMk6i.js";import"./useControlledState-rTz5CSzi.js";import"./Collection-CuM96cDy.js";import"./CollectionBuilder-CkLqU0EG.js";import"./Separator-BbijxOJI.js";import"./Group-CtcjVW7W.js";import"./SearchField-CEGXi6ip.js";import"./FieldError-By7Lq8z0.js";import"./Form-BEAgwaeD.js";import"./useTextField-DhOhnSWz.js";import"./useFormReset-DuzsM7E6.js";import"./TextField-DsmYuxt9.js";import"./useEvent-CO0sOg2Z.js";import"./SelectionManager-BV1kevWQ.js";import"./useCollator-DwaKC1E9.js";import"./FocusScope-CeR_G6vH.js";import"./VisuallyHidden-CwBbURTG.js";import"./Switch-Dwennx8r.js";import"./Label-CLVda-nU.js";import"./useToggleState-DgBLmNdY.js";import"./Overlay-Cr3fg4Kv.js";import"./ButtonView-cFSQt75n.js";import"./Heading-ByG_Ikfv.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
