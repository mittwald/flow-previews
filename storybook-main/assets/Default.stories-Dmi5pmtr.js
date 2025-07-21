import{j as r}from"./iframe-p6Bp2Ow-.js";import{D as B,$ as H,X as S,H as v,a0 as C}from"./IconWarning-_xRihr7t.js";import{L as m}from"./Link-DQg1GU9j.js";import{H as s}from"./HeaderNavigation-BO6z1Pdx.js";import{B as o}from"./Button-BLeGlv8j.js";import{T as p}from"./Text-BtmxEKoY.js";import{I as L}from"./Image-DxMsQ2UB.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-Ie9uvO3f.js";import{a as b,C as D,M as c}from"./ContextMenuContent-XRANToYv.js";import"./ContextMenuSection-CDQ5retU.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-DAl7KhPy.js";import{H as W}from"./Heading-Cfc5zEsW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BTW_bpGX.js";import"./mergeRefs-BhA_prJr.js";import"./index-CjBL_wgX.js";import"./useLocalizedStringFormatter-DIJ10SGn.js";import"./context-BreHr6W7.js";import"./utils-CnAbB5du.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Dx_e9Euk.js";import"./useFocus-DgSV50G0.js";import"./useFocusRing-BMw7ZmRN.js";import"./useFocusable-B_o37Ayh.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Aq6Gq52o.js";import"./Button-DuvBnjq7.js";import"./ProgressBar-NAttgbiM.js";import"./Label-zTn1BqTc.js";import"./Hidden-Bh_0QKLq.js";import"./useLabel-Db1j6kak.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B4AtpSGe.js";import"./EmulatedBoldText-DJP3uLZJ.js";import"./Text-Cx3sBrCD.js";import"./AlertIcon-C3hQApSW.js";import"./Action-A5AfYnIu.js";import"./context-B70X11Ud.js";import"./useStatic-3gyrNX_Q.js";import"./getActionGroupSlot-BY1hyZob.js";import"./Popover-BfkzleVk.js";import"./DialogTriggerView-DhZV5udn.js";import"./Dialog-_gMyH4Hj.js";import"./RSPContexts-D2-zMuP7.js";import"./OverlayArrow-jZ3LH-Hh.js";import"./useControlledState-rcKaJ30A.js";import"./Collection-BslN4fmG.js";import"./CollectionBuilder-0vjbF6vR.js";import"./Separator--jTylhFG.js";import"./Input-CreDFhOd.js";import"./SearchField-Djq6QHUL.js";import"./FieldError-Drz17t_W.js";import"./Form-JnaaWtcr.js";import"./Group-U4W79Xdy.js";import"./useTextField-B_B9v3Ja.js";import"./useFormReset-BpxJN7m8.js";import"./TextField-D4rInykg.js";import"./SelectionManager-D33tAYjc.js";import"./useEvent-yXH8ok0I.js";import"./useCollator-DwKmC7HY.js";import"./FocusScope-U7qUa4av.js";import"./VisuallyHidden-DLIZ8dPS.js";import"./Switch-BNArN3vU.js";import"./Label-BhgKcmWm.js";import"./useToggleState-hKmtsIPl.js";import"./Overlay-BWQk9dbF.js";import"./Header-ButA05Zw.js";import"./ButtonView-re4rscF4.js";import"./Heading-ietWoT3o.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},i={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const eo=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,i as Light,e as WithContextMenu,eo as __namedExportsOrder,to as default};
